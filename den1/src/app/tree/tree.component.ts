import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from "../data.service";
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

import { Subscription } from 'rxjs';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [
    ApiService
  ]
})
export class TreeComponent implements OnInit {
  message: string = "";
  treedata2: TreeviewItem[];
  subscription: Subscription;


  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });
  constructor(private api: ApiService, private datas: DataService) { }

  ngOnInit(): void {
    this.subscription = this.datas.currentMessage.subscribe((message: any) => {
      this.message = message
      this.treedata2 = this.api.getBooks()

      this.api.getir().subscribe((d: Record<any, any>) => {



        let child = new TreeviewItem({
          text: this.message, value: 1, collapsed: true,
          children: [{ text: "", value: 3 }]
        });
        child.children.shift()

        Object.keys(d["data"][this.message]).forEach(z => {

          if (typeof (d["data"][this.message][z]) === 'string') {

            let child2 = new TreeviewItem({ text: z + ": " + d["data"][this.message][z], value: 3 })
            child.children.push(child2)
          }
          else {

            let child2 = new TreeviewItem({ text: z + ": " + d["data"][this.message][z], value: 3, children: [{ text: "", value: 0 }] })
            child2.children.shift()
            Object.keys(d["data"][this.message][z]).forEach(k => {

              let child3 = new TreeviewItem({ text: k + ": " + d["data"][this.message][z][k], value: 3 })
              child2.children.push(child3)

            })

            child.children.push(child2)
          }


        })


        this.treedata2.shift()
        this.treedata2.push(child)

      })

    })

  }
}