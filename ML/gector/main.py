import uvicorn
from fastapi import Request,FastAPI
from predict import *
from pydantic import BaseModel


app = FastAPI()

class Basic(BaseModel):
    text : str

@app.post("/api/ml/correction")
async def correction(request: Basic):
    result = predict_for_file(model, request.text)
    return {"Output":f"{result}"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
