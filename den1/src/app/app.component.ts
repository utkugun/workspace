
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ad:string="LOL HEROS";
 champ: any=[] ;
 ozellik:any=[];
  kah:any;
  len:any=0;
  selectedValue:any=""
  selectedValue1:any=""
  data:any=""
  pic:any=""

  imgCollection: Array<object> = [];




  constructor(private api: ApiService ) {}

  ngOnInit() {
 
  this.api.getir().subscribe((d:Record<any, any>) => {
    this.kah=d["data"]
    
    Object.keys(this.kah).forEach((k)=>{
      
      this.champ.push(this.kah[k]["name"])
      
  })
        
  Object.keys(d["data"]["Aatrox"]).forEach((z)=>{
          
    this.ozellik.push(z)
})


})

}

sel(sel1:string,sel2:string):void{
  this.imgCollection=[]
  this.data=JSON.stringify(this.kah[sel1][sel2])
 

 

 this.imgCollection=[
  {
    image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_0.jpg',
    thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_0.jpg',
    alt: 'Image 1',
    title: 'Image 1'
  }, {
    image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_1.jpg',
    thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_1.jpg',
    title: 'Image 2',
    alt: 'Image 2'
  }, {
    image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_2.jpg',
    thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+sel1+'_2.jpg',
    title: 'Image 3',
    alt: 'Image 3'
  }
];
  

}
}