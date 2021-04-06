import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient) { }

  checkAPIServices() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('login_token')}`,
      }),
    };
    return this.httpClient.get(
      `/api/v1/voicely`,
      httpOptions
    );
  }
}
