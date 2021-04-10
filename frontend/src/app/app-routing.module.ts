import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './voicely/home/home.component';
import { LetsVoicelyComponent } from './voicely/lets-voicely/lets-voicely.component';
import { VoicelyComponent } from './voicely/voicely.component';
import { StatisticsComponent } from "./voicely/statistics/statistics.component";
import { UnderDevelopmentComponent } from './voicely/under-development/under-development.component';

const routes: Routes = [
  {
    path:'app' , 
    component:VoicelyComponent, 
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'voicely', component: LetsVoicelyComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'inProgress' , component: UnderDevelopmentComponent}

    ],
  },
  {path: '**', redirectTo: '/app/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
