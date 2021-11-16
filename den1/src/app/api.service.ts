import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
const url = 'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getir() {
    return this.http.get(url);
  }

  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Özellikler', value: 1, children: []
    });



    return [childrenCategory];
  }


}

