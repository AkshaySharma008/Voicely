import { Component, OnInit } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-lets-voicely',
  templateUrl: './lets-voicely.component.html',
  styleUrls: ['./lets-voicely.component.css']
})
export class LetsVoicelyComponent implements OnInit {

  constructor( private addService: AddService,private formBuilder: FormBuilder, private http: HttpClient) { 
  }

  public blobUrl;
  audioUploadForm:FormGroup;
  public convertedText;
  public audio_path;

  ngOnInit(): void {
    this.audioUploadForm = this.formBuilder.group({
      audio:['', Validators.required]
    })
  }

  public audio_file;
  onUpload(evnt){
    console.log(evnt.target.files[0]);
    this.audio_file = evnt.target.files[0]
  }

  sendAudioFile() {
    const formData = new FormData;
    formData.append('audio', this.audio_file);
    this.addService.saveAudio(formData).subscribe((res:any) => {
      console.log(res);
      this.convertedText = res.data;
      this.audio_path = res.audio_file_name;
    })
  };

  cloneAudio() {
    this.addService.cloneAudio({path: this.audio_path, message: this.convertedText}).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
