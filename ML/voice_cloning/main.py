import uvicorn
from fastapi import FastAPI
from demo_cli import *

import librosa
import numpy as np
import soundfile as sf
import noisereduce as nr


app = FastAPI()

@app.get("/api/ml/clone")
async def cloned_voice():
    message =  "/home/lite/voice_cloning/Voicely/ML/voice_cloning/sounds/data.wav"
    sentence = "This is the trial voice cloning application programmable interface which need some more perfection"
    name = generate_coloned_voice(message,sentence)
    return {"Message":f"New wav file is generated with the name of {name}"}

@app.get("/api/ml/noise")
async def noise_rm():
    input_path = "./sounds/data.wav"
    output_path = "./sounds/output_data.wav"
    original_wav, sampling_rate = librosa.load(input_path)
    snr = 2
    noise_clip = original_wav/snr
    noise_reduced = nr.reduce_noise(audio_clip=original_wav, noise_clip=noise_clip, verbose=False)
    sf.write(output_path, noise_reduced.astype(np.float64), sampling_rate)
    return {"Message": "Status 200 application is ok"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
