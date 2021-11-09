
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  champ: any = [];
  constructor(private api: ApiService) {}

  getchamps() {
    this.api.getir().subscribe(data => {
        for (const d of (data as any)) 
        {this.champ.push(d.data)}
        console.log(this.champ)
    })
  }

}