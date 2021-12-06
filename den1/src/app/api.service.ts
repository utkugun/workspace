import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';
const url = 'https://ddragon.leagueoflegends.com/cdn/11.22.1/data/tr_TR/champion.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  subscription: Subscription;
  message: string = "";
  url1:string=""
  constructor(private http: HttpClient, private datas: DataService) {
    
  }

  getir() {
    return this.http.get(url);

  }

  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Özellikler', value: 1, children: []
    });
    return [childrenCategory];
  }

  getdetay(message:string) {
       this.url1 = "https://ddragon.leagueoflegends.com/cdn/11.23.1/data/tr_TR/champion/" + message + ".json"
            return this.http.get(this.url1)
  }

}

