import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {dropdownCarComponent}  from './dropdown/dropdown.car';
import {carModelComponent}  from './model_dropdown/car.model';
import {sharedDataService}  from './shared_data/shared_data.service';


@NgModule({
  declarations: [
    AppComponent, dropdownCarComponent, carModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  sharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
