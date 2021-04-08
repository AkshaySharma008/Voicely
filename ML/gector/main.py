import uvicorn
from fastapi import Request,FastAPI
from predict import *
from pydantic import BaseModel


app = FastAPI()

class Basic(BaseModel):
    text : str

# 2 API hit from node after getting text from speech
@app.post("/api/ml/correction")
async def correction(request: Basic):
    result = predict_for_file(model, request.text)
    return {"Output":result}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=9000)
