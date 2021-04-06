import librosa
import numpy as np
import soundfile as sf
import noisereduce as nr
import uvicorn
from fastapi import FastAPI

app = FastAPI()
@app.get("/")
async def noise_rm():
    input_path = "./data.wav"
    output_path = "output_2.wav"
    original_wav, sampling_rate = librosa.load(input_path)
    snr = 2
    noise_clip = original_wav/snr
    noise_reduced = nr.reduce_noise(audio_clip=original_wav, noise_clip=noise_clip, verbose=False)
    sf.write(output_path, noise_reduced.astype(np.float32), sampling_rate)
    return {"Message": "Status 200 ok"}
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=9000)