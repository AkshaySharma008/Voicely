import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private httpClient: HttpClient) { }

  saveAudio(data) {
    return this.httpClient.post(
      `/api/v1/voicely/save-audio`,
      data
    );
  }

  cloneAudio(data) {
    return this.httpClient.post(
      `/api/v1/voicely/clone`,
      data
    );
  }
}
