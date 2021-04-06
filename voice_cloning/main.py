import uvicorn
from fastapi import FastAPI
from demo_cli import *
app = FastAPI()
@app.get("/")
async def cloned_voice():
    message =  "/home/lite/Downloads/sounds/p.wav"
    sentence = "This is the trial voice cloning application programmable interface which need some more perfection"
    name = generate_coloned_voice(message,sentence)
    return {"Message":f"New wav file is generated with the name of {name}"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
