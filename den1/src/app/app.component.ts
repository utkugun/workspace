
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ad:string="utku"
  champ: any ;
  len:any;
  url = "lol.json";
 
  constructor(private api: ApiService) {}

  ngOnInit() {
 
  this.api.getir().subscribe(data => {
    this.champ=Array.of(data)
   
  })

  }}