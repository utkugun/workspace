import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { button } from './button';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { NgImageSliderModule } from 'ng-image-slider';
import { ResimComponent } from './resim/resim.component';
import { TreeComponent } from './tree/tree.component';
@NgModule({
  declarations: [
    AppComponent,button, ResimComponent, TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatSliderModule, BrowserAnimationsModule,MatButtonModule,MatToolbarModule,MatCardModule,HttpClientModule,
    MatSelectModule,FormsModule, NgImageSliderModule,MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
