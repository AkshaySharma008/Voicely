import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoicelyComponent } from './voicely/voicely.component';


const routes: Routes = [
  {path:'' , component:VoicelyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
