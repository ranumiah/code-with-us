import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';

// So this guy describes the class that follows it
@NgModule({
  imports: [                  // What stuff do I need?
    BrowserModule,
    FormsModule
  ],
  declarations: [             // What's in my app module?
    AppComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  bootstrap: [AppComponent] // Where do I start?
})
export class AppModule { }
