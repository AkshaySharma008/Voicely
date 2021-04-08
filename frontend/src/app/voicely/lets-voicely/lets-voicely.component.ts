import { Component, OnInit } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-lets-voicely',
  templateUrl: './lets-voicely.component.html',
  styleUrls: ['./lets-voicely.component.css']
})
export class LetsVoicelyComponent implements OnInit {

  constructor( private audioRecorderService: NgAudioRecorderService ,private formBuilder: FormBuilder) { 
    this.audioRecorderService.recorderError.subscribe(recorderErrorCase => {
      // Handle Error
  })
  }

  public blobUrl;
  audioUploadForm:FormGroup;

  ngOnInit(): void {
    this.audioUploadForm = this.formBuilder.group({
      audio:['', Validators.required]
    })
  }

  startRecording() {
    this.audioRecorderService.startRecording();
  }

  stopRecording() {
     this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB_URL).then((output) => {
        // do post output steps
        this.blobUrl = output;
        console.log(this.blobUrl);
        // this.sendAudioFile(this.blobUrl);

     }).catch(errrorCase => {
         // Handle Error
         console.log('error aae');
         console.log(errrorCase)
     });
  }

  onUpload(e){
    console.log(e);
  }

  // sendAudioFile = file => {
  //   const formData = new FormData();
  //   formData.append('audio-file', file);
  //   return fetch(this.blobUrl, {
  //     method: 'POST',
  //     body: formData
  //   });
  // };


}
