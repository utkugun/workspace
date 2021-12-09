
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  ad: string = "LOL HEROES";
  champ: any = [];
  ozellik: any = [];
  kah: any;
  len: any = 0;

  dat: any = "";
  pic: any = "";
  message: string = "";
  subscription: Subscription;
  
  imgCollection: Array<object> = [];




  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe((message: any) => this.message = message)

    this.api.getir().subscribe((d: Record<any, any>) => {

      this.kah = d["data"]

      Object.keys(this.kah).forEach((k) => {

        this.champ.push(this.kah[k]["name"])

      })

      Object.keys(d["data"]["Aatrox"]).forEach((z) => {

        this.ozellik.push(z)
      })


    })

  }

  sel(sel1: string): void {

    this.data.changeMessage(sel1)
   
    

  }

  newMessage() {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}