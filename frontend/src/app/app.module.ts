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



@NgModule({
  declarations: [
    AppComponent,
    VoicelyComponent
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
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
