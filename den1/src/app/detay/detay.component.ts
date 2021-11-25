import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {
  kahdetay: any;
  subscription: Subscription;
  message: string = ""
  detayarr: any = []
  detayarr1: any = []
  ch: string = ""
  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit() {

    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.detayarr = []
      this.detayarr1 = []
      this.message = message


      this.api.getdetay(this.message).subscribe((d: Record<any, any>) => {

        this.kahdetay = d["data"][this.message]

        Object.keys(this.kahdetay).forEach((z, index) => {

          if (typeof (this.kahdetay[z]) == ('string' || 'number')) {
            this.detayarr.push(z)
          }

          else {


            this.detayarr1.push(z)

          }
         
        })

      })
    })

  }
  

}

