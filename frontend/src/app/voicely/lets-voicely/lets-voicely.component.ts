import { Component, OnInit } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lets-voicely',
  templateUrl: './lets-voicely.component.html',
  styleUrls: ['./lets-voicely.component.css'],
})
export class LetsVoicelyComponent implements OnInit {
  constructor(
    private addService: AddService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {}

  public blobUrl;
  public audioUploadForm: FormGroup;
  public correctedTextForm: FormGroup;
  public convertedText;
  public audio_path;
  public showOverlay = false;
  public s3Link =
    'https://arkynexbucket.s3.amazonaws.com/output_1617964161747494.wav';

  ngOnInit(): void {
    this.audioUploadForm = this.formBuilder.group({
      audio: ['', Validators.required],
    });
    this.correctedTextForm = this.formBuilder.group({
      correctedText: ['', Validators.required],
      inputText: ['', Validators.required],
    });
  }

  public audio_file;
  onUpload(evnt) {
    console.log(evnt.target.files[0]);
    this.audio_file = evnt.target.files[0];
  }

  sendAudioFile() {
    const formData = new FormData();
    formData.append('audio', this.audio_file);
    this.showOverlay = true;
    this.addService.saveAudio(formData).subscribe((res: any) => {
      console.log(res);
      this.correctedTextForm.patchValue({ inputText: res.input_speech });
      this.correctedTextForm.patchValue({ correctedText: res.data });
      this.audio_path = res.audio_file_name;
      this.showOverlay = false;
    });
  }

  cloneAudio() {
    this.showOverlay = true;
    this.addService
      .cloneAudio({
        path: this.audio_path,
        message: this.correctedTextForm.value.correctedText,
      })
      .subscribe((res: any) => {
        console.log(res);
        this.showOverlay = false;
        this.s3Link = res.s3Data.Location;
      });
  }

  //Lets declare Record OBJ
  record;
  //Will use this flag for toggeling recording
  recording = false;
  //URL of Blob
  url;
  error;
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia({video: false, audio: true})
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    var options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
      sampleRate: 44100,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }
}
