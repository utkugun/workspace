import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getir() {
    return this.http.get(url);
  }
}

