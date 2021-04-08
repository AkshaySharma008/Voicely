import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './voicely/home/home.component';
import { LetsVoicelyComponent } from './voicely/lets-voicely/lets-voicely.component';
import { VoicelyComponent } from './voicely/voicely.component';


const routes: Routes = [
  {
    path:'app' , 
    component:VoicelyComponent, 
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'voicely', component: LetsVoicelyComponent}
    ],
  },
  {path: '**', redirectTo: '/app/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
