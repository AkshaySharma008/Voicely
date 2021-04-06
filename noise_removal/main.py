
import librosa
import numpy as np
import soundfile as sf
import noisereduce as nr


original_wav, sampling_rate = librosa.load(str("./data.wav"))

snr = 2
noise_clip = original_wav/snr

noise_reduced = nr.reduce_noise(audio_clip=original_wav, noise_clip=noise_clip, verbose=False)

sf.write("output.wav", noise_reduced.astype(np.float32), sampling_rate)