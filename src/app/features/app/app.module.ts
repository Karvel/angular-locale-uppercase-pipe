import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AppRoutingModule,
  components as mainComponents,
} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, mainComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
