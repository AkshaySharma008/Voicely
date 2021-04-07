import uvicorn
from fastapi import FastAPI
from demo_cli import *
from pydantic import BaseModel


app = FastAPI()

class Voice(BaseModel):
    path : str
    message : str
@app.post("/api/ml/clone")
async def cloned_voice(request: Voice):
    path =  request.path
    message = request.message
    print(path,message)
    name = generate_coloned_voice(path,message)
    return {"Message":f"New wav file is generated with the name of {name}"}

# @app.get("/api/ml/noise")
# async def noise_rm():
#     input_path = "./sounds/data.wav"
#     output_path = "./sounds/output_data.wav"
#     original_wav, sampling_rate = librosa.load(input_path)
#     snr = 2
#     noise_clip = original_wav/snr
#     noise_reduced = nr.reduce_noise(audio_clip=original_wav, noise_clip=noise_clip, verbose=False)
#     sf.write(output_path, noise_reduced.astype(np.float64), sampling_rate)
#     return {"Message": "Status 200 application is ok"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
