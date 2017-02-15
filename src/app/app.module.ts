import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// So this guy describes the class that follows it
@NgModule({
  imports: [BrowserModule],  // what stuff do i need?
  declarations: [AppComponent],  // what things are in my app
  bootstrap: [AppComponent]  // where do i start?
})
export class AppModule { }
