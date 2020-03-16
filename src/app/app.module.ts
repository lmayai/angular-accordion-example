import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CollapseItemComponent } from './collapse-item/collapse-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, CollapseComponent, CollapseItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
