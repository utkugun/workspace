import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ApiService } from '../api.service';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
})
export class TreeNestedOverviewExample {
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  message:string="";
  subscription:Subscription;
  constructor(private api: ApiService,private data: DataService) {
    this.subscription = this.data.currentMessage.subscribe((message:any)=> this.message = message)

    this.api.getir().subscribe((d:Record<any, any>) => {
      
      this.dataSource=d["data"][this.message]
    })
  
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}