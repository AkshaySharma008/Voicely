import { Component, OnInit } from '@angular/core';
import {FetchService} from '../services/fetch.service'
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-voicely',
  templateUrl: './voicely.component.html',
  styleUrls: ['./voicely.component.css']
})
export class VoicelyComponent implements OnInit {

  constructor(private fetchService: FetchService, private sidebarService: NbSidebarService) { }

  public user = {name: "Satya Prakash"};

  ngOnInit(): void {
    this.fetchService.checkAPIServices().subscribe((res:any) => {
      console.log(res);
    })
  }

  public items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/app/home'
    },
    {
      title: 'Clone Voice',
      icon: 'headphones-outline',
      link: '/app/recycle'
    },
    {
      title: 'Let\'s Voicely',
      icon: 'checkmark-square-outline',
      link: '/app/history'
    },
    {
      title: 'Statistics',
      icon: 'activity-outline',
      link: '/app/report'
    },
    {
      title: 'My History',
      icon: 'archive-outline',
      link: '/app/rewards'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '/auth/logout'
    },
  ];

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
