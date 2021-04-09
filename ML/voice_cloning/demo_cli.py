
from utils.argutils import print_args
from synthesizer.inference import Synthesizer
from encoder import inference as encoder
from vocoder import inference as vocoder
from pathlib import Path
import numpy as np
import soundfile as sf
import librosa
import argparse
import torch
import os
warehouse_path = '../../Warehouse/'
import datetime


parser = argparse.ArgumentParser(
    formatter_class=argparse.ArgumentDefaultsHelpFormatter
)
parser.add_argument("-e", "--enc_model_fpath", type=Path, 
                    default="encoder/saved_models/pretrained.pt",
                    help="Path to a saved encoder")
parser.add_argument("-s", "--syn_model_fpath", type=Path, 
                    default="synthesizer/saved_models/pretrained/pretrained.pt",
                    help="Path to a saved synthesizer")
parser.add_argument("-v", "--voc_model_fpath", type=Path, 
                    default="vocoder/saved_models/pretrained/pretrained.pt",
                    help="Path to a saved vocoder")
parser.add_argument("--cpu", action="store_true", help=\
    "If True, processing is done on CPU, even when a GPU is available.")
parser.add_argument("--no_sound", action="store_true", help=\
    "If True, audio won't be played.")
parser.add_argument("--seed", type=int, default=None, help=\
    "Optional random number seed value to make toolbox deterministic.")
parser.add_argument("--no_mp3_support", action="store_true", help=\
    "If True, disallows loading mp3 files to prevent audioread errors when ffmpeg is not installed.")
args = parser.parse_args()
print_args(args, parser)
if not args.no_sound:
    import sounddevice as sd

if args.cpu:
    # Hide GPUs from Pytorch to force CPU processing
    os.environ["CUDA_VISIBLE_DEVICES"] = ""

if torch.cuda.is_available():
    device_id = torch.cuda.current_device()
    gpu_properties = torch.cuda.get_device_properties(device_id)
    ## Print some environment information (for debugging purposes)
    print("Found %d GPUs available. Using GPU %d (%s) of compute capability %d.%d with "
        "%.1fGb total memory.\n" % 
        (torch.cuda.device_count(),
        device_id,
        gpu_properties.name,
        gpu_properties.major,
        gpu_properties.minor,
        gpu_properties.total_memory / 1e9))
else:
    print("Using CPU for inference.\n")
    
print("Interactive generation loop")
num_generated = 0

def generate_coloned_voice(path,sentence):
    trial = 1
    while trial:
        trial -= 1
        try:
            ## Load the models one by one.
            print("Preparing the encoder, the synthesizer and the vocoder...")
            encoder.load_model(args.enc_model_fpath)
            print("line 71")
            synthesizer = Synthesizer(args.syn_model_fpath)
            print("line 73")
            vocoder.load_model(args.voc_model_fpath)
            print("line 75")
            in_fpath = Path(path.replace("\"", "").replace("\'", ""))
            print("line 77")
            if in_fpath.suffix.lower() == ".mp3" and args.no_mp3_support:
                print("Can't Use mp3 files please try again:")
                continue
            ## Computing the embedding
            # First, we load the wav using the function that the speaker encoder provides. This is 
            # important: there is preprocessing that must be applied.
            
            # The following two methods are equivalent:
            # - Directly load from the filepath:
            preprocessed_wav = encoder.preprocess_wav(in_fpath)
            # - If the wav is already loaded:
            original_wav, sampling_rate = librosa.load(str(in_fpath))
            preprocessed_wav = encoder.preprocess_wav(original_wav, sampling_rate)
            print("Loaded file succesfully")
            
            # Then we derive the embedding. There are many functions and parameters that the 
            # speaker encoder interfaces. These are mostly for in-depth research. You will typically
            # only use this function (with its default parameters):
            embed = encoder.embed_utterance(preprocessed_wav)
            print("Created the embedding")
            
            
            ## Generating the spectrogram
            text = sentence
            
            # If seed is specified, reset torch seed and force synthesizer reload
            if args.seed is not None:
                torch.manual_seed(args.seed)
                synthesizer = Synthesizer(args.syn_model_fpath)

            # The synthesizer works in batch, so you need to put your data in a list or numpy array
            texts = [text]
            embeds = [embed]
            # If you know what the attention layer alignments are, you can retrieve them here by
            # passing return_alignments=True
            specs = synthesizer.synthesize_spectrograms(texts, embeds)
            spec = specs[0]
            print("Created the mel spectrogram")

            ## Generating the waveform
            print("Synthesizing the waveform:")

            # If seed is specified, reset torch seed and reload vocoder
            if args.seed is not None:
                torch.manual_seed(args.seed)
                vocoder.load_model(args.voc_model_fpath)

            # Synthesizing the waveform is fairly straightforward. Remember that the longer the
            # spectrogram, the more time-efficient the vocoder.
            generated_wav = vocoder.infer_waveform(spec)

            ## Post-generation
            # There's a bug with sounddevice that makes the audio cut one second earlier, so we
            # pad it.
            generated_wav = np.pad(generated_wav, (0, synthesizer.sample_rate), mode="constant")

            # Trim excess silences to compensate for gaps in spectrograms (issue #53)
            generated_wav = encoder.preprocess_wav(generated_wav)
                
            # Save it on the disk
            num_generated = datetime.datetime.now()
            num_generated = datetime.datetime.timestamp(num_generated)
            num_generated = str(num_generated)
            num_generated = num_generated.replace('.','')
            actual_name = "output_%s.wav" % num_generated
            filename = warehouse_path + actual_name
            print(generated_wav.dtype)
            sf.write(filename, generated_wav.astype(np.float32), synthesizer.sample_rate)
            print("\nSaved output as %s\n\n" % filename)
            return actual_name
        except Exception as e:
            print("Caught exception: %s" % repr(e))
            print("Restarting\n")