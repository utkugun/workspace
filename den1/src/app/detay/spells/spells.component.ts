import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  kahdetay: any[];
  subscription: Subscription;
  message: string = ""
  abilityresourcename:any
 
  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit(): void {this.subscription = this.data.currentMessage.subscribe((message: any) => {

  
    this.message = message


    this.api.getdetay(this.message).subscribe((d: Record<any, any>) => {

      this.kahdetay = d["data"][this.message]["spells"]
      this.abilityresourcename=d["data"][this.message]["partype"]
      
      
    })


  })
}
}

