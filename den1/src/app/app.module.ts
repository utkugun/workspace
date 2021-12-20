import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeviewModule } from 'ngx-treeview';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { NgImageSliderModule } from 'ng-image-slider';
import { ResimComponent } from './resim/resim.component';
import { TreeComponent } from './tree/tree.component';
import { DetayComponent } from './detay/detay.component';
import { SpellsComponent } from './detay/spells/spells.component';
import { SafePipe } from './safe.pipe';
import { ThreeComponent } from './three/three/three.component';



@NgModule({
  declarations: [
    AppComponent, ResimComponent,TreeComponent, DetayComponent, SpellsComponent, SafePipe, ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatSliderModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatCardModule, HttpClientModule,
    MatSelectModule, FormsModule, NgImageSliderModule,TreeviewModule.forRoot(),MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
