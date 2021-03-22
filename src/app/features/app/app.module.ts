import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AppRoutingModule,
  components as mainComponents,
} from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxModule } from '../sandbox/sandbox.module';
import { SharedModule } from 'app/infrastructure/shared/shared.module';

@NgModule({
  declarations: [AppComponent, mainComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SandboxModule,
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
