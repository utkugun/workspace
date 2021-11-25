import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-resim',
  templateUrl: './resim.component.html',
  styleUrls: ['./resim.component.css']
})
export class ResimComponent implements OnInit {
  message: string = "";
  subscription: Subscription;
  imgCollection: Array<object> = [];
  resimler: any = []
  k: string = ""
  constructor(private data: DataService, private api: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message: string) => {
      this.message=message
      this.imgCollection = []
        
      this.api.getdetay(this.message).subscribe((d: Record<any, any>) => {
        this.resimler=d["data"][this.message]["skins"]
        this.resimler.forEach((res:any,index:number) => {

          this.k = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + this.message + '_' + res["num"] + '.jpg',

            this.imgCollection.push({
              image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + this.message + '_' + res["num"] + '.jpg',
              thumbImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + this.message + '_' + res["num"] + '.jpg',
              alt: index,
              title: index
            })

        })

      })



    })


  }

}
