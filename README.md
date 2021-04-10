# Voicely
A Digital Voice Assistant Application 

![Voicely](https://github.com/AkshaySharma008/Voicely/blob/main/frontend/src/assets/Voicely.png)

This application is like a Grammarly for Voice. It will feed your voice and will return you back with the corrrected text grammatically in your own voice.

### Prerequisites

What things you need to install the software and how to install them
1. Python (>=Python 3.7)
2. Node
3. FastApi
4. Angular 9+

### Running the Platform

1. After cloning , go to Frontend folder, run ```npm i ``` and the ```npm start```. It will run at localhost:4200
2. Similar case for the Backend folder, run ```npm i ``` and the ```npm start```.

## Running the ML servers
* Requirements for both servers to run are 
* **python3.8**  
* **pip3**
* **fastapi** , Run `pip3 install fastapi`
* **uvicorn** , Run `pip3 install uvicorn`
## Voice cloning
### 1. Install Requirements

* Install [PyTorch](https://pytorch.org/get-started/locally/) (>=1.0.1).
* Install [ffmpeg](https://ffmpeg.org/download.html#get-packages).
* Run `pip install -r requirements.txt` to install the remaining necessary packages.

### 2. Download Pretrained Models
Download the latest [here](https://github.com/CorentinJ/Real-Time-Voice-Cloning/wiki/Pretrained-models).

Copy the saved_models folders from each folder above to the respective folders in the ML/voice_cloning.  

### 3. Run the servers
Go to ML/voice_cloning folder and -
Run `python3 main.py`


## Gector
### 1. Install requirements
* Run `pip3 install -r requirements.txt` to install the necessary packages.

### 2. Download Pretrained models
Download the **Roberta** model [here](https://grammarly-nlp-data-public.s3.amazonaws.com/gector/roberta_1_gector.th)

Copy the downloaded model to the ML/gector folder.

### 3. Run the servers
Go to ML/gector folder and -
Run `python3 main.py` 





## Important Links
* Presentation - [PPT Link](https://www.canva.com/design/DAEYSuGT9-w/CL-jDSQ9FA1tlGDXGV_uYA/view?utm_content=DAEYSuGT9-w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)
* Video Link - [Youtube Video](https://youtu.be/H4cZBT86_ok)
* Submission Link - [Submission Link](https://devpost.com/software/sanket)



## Mentors Suggestion
* Suggestion 1 - To make the user voice input multilingual. (Completed)
* Suggestion 2 - To build the other of communication i.e from Sign Language to Transcript. (Completed)


## Authors

* **Satya Prakash** - [satya9500](https://github.com/satya9500)
* **Akshay Sharma** - [AkshaySharma008](https://github.com/AkshaySharma008)
* **Rishav Sharma** - [flarsu](https://github.com/flarsu)
* **Harsh Chauhan** - [RAVANv2](https://github.com/RAVANv2)

 ## Acknowledgments

* Made with &#9829; during Rackathon 2021 in 24 hrs.
