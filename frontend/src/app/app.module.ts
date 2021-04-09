import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoicelyComponent } from './voicely/voicely.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule,
  NbIconModule, NbInputModule,
  NbLayoutModule, NbListModule, NbMenuModule, NbMenuService, NbSearchModule,
  NbSidebarModule,
  NbSidebarService, NbSpinnerModule, NbStepperModule,
  NbThemeModule, NbToastrModule,
  NbUserModule
} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './voicely/home/home.component';
import { LetsVoicelyComponent } from './voicely/lets-voicely/lets-voicely.component';

import { NgAudioRecorderModule } from 'ng-audio-recorder';
import { StatisticsComponent } from './voicely/statistics/statistics.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;





@NgModule({
  declarations: [
    AppComponent,
    VoicelyComponent,
    HomeComponent,
    LetsVoicelyComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    HttpClientModule,
    NbContextMenuModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbSearchModule,
    NbListModule,
    NgAudioRecorderModule,
    PlotlyModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
