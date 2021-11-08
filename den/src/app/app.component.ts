import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'den';
ad:string ="utku";
soyad:string="gun";


klik (value:string):void{

this.ad=( value)
}

}
