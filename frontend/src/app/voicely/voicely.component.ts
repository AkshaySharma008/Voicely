import { Component, OnInit } from '@angular/core';
import {FetchService} from '../services/fetch.service'

@Component({
  selector: 'app-voicely',
  templateUrl: './voicely.component.html',
  styleUrls: ['./voicely.component.css']
})
export class VoicelyComponent implements OnInit {

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.checkAPIServices().subscribe((res:any) => {
      console.log(res);
    })
  }

}
