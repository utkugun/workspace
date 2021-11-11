import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-resim',
  templateUrl: './resim.component.html',
  styleUrls: ['./resim.component.css']
})
export class ResimComponent implements OnInit {
  message:string="";
  subscription: Subscription;
  imgCollection: Array<object> = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message:string) =>{ 
      this.imgCollection=[
      {
        image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_0.jpg',
        thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_0.jpg',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_1.jpg',
        thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_1.jpg',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_2.jpg',
        thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+message+'_2.jpg',
        title: 'Image 3',
        alt: 'Image 3'
      }
    ];
  
  })


  }

}
