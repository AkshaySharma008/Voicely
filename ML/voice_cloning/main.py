import uvicorn
from fastapi import FastAPI
from demo_cli import *
from pydantic import BaseModel
from voice2text import *

warehouse_path = '../../Warehouse/'
app = FastAPI()

# 3 API hit with correct message and audio file_name
class Voice(BaseModel):
    path : str
    message : str
@app.post("/api/ml/clone")
async def cloned_voice(request: Voice):
    path =  warehouse_path + request.path
    message = request.message
    print(path,message)
    file_name = generate_coloned_voice(path,message)
    return {"output_file":file_name}


# 1 API Hit from node.js
class Speech(BaseModel):
    file_name : str
@app.post("/api/ml/speech-to-text")
async def speect_to_text(request: Speech):
    request.file_name = warehouse_path + request.file_name
    result = retrieve_transcript(request.file_name)
    return {"Output": result }
    
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
