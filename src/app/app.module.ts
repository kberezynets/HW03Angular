import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHW03Component } from './main-hw03/main-hw03.component';
import { ChildHW03Component } from './main-HW03/child-hw03/child-hw03.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHW03Component,
    ChildHW03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
