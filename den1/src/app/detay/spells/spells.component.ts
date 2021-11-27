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
  subscription2: Subscription;
  message: string = ""
  abilityresourcename: any
  costtype: any = []
  tooltip: any = []
  sliderval: number = 1

  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.subscription2 = this.data.sliderval.subscribe((slidervalue: any) => {
        this.sliderval = slidervalue

        this.message = message
        this.costtype = []
        this.tooltip = []
        this.api.getdetay(this.message).subscribe((d: Record<any, any>) => {

          let dammage = d["data"][this.message]["stats"]["attackdamage"]

          this.kahdetay = d["data"][this.message]["spells"]



          this.abilityresourcename = d["data"][this.message]["partype"]

          Object.keys(this.kahdetay).forEach((z, index) => {

            if (this.kahdetay[index]["costType"].indexOf("{{ abilityresourcename }}") > 0) {

              let deg = this.kahdetay[index]["costType"]

              deg = deg.replace("{{ abilityresourcename }}", this.abilityresourcename)

              this.costtype.push(deg)
            }

            else {
              this.costtype.push(this.kahdetay[index]["costType"])

            }


            let tool = this.kahdetay[index]["tooltip"]

            if (tool.indexOf("{{ totaldamage }}") > 0) {
              tool = tool.replace("{{ totaldamage }}", dammage)
            }

           
              if (tool.indexOf("{{ e1 }}") > 0) {
                tool = tool.replace("{{ e1 }}", this.kahdetay[index]["effect"][1][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e2 }}") > 0) {
                tool = tool.replace("{{ e2 }}", this.kahdetay[index]["effect"][2][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e3 }}") > 0) {
                tool = tool.replace("{{ e3 }}", this.kahdetay[index]["effect"][3][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e4 }}") > 0) {
                tool = tool.replace("{{ e4 }}", this.kahdetay[index]["effect"][4][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e5 }}") > 0) {
                tool = tool.replace("{{ e5 }}", this.kahdetay[index]["effect"][5][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e6 }}") > 0) {
                tool = tool.replace("{{ e6 }}", this.kahdetay[index]["effect"][6][this.sliderval.valueOf()])
              }
              if (tool.indexOf("{{ e7 }}") > 0) {
                tool = tool.replace("{{ e7 }}", this.kahdetay[index]["effect"][7][this.sliderval.valueOf()])
              }
            
            

            
            this.tooltip.push(tool)




          })
        })

      })
    })
  }


  slider(value: number): void {

    this.data.sliderchange(value.toString())
  }
}

