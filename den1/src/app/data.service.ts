import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  private messageSource2 = new BehaviorSubject('0');
  currentMessage = this.messageSource.asObservable();
  sliderval = this.messageSource2.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  sliderchange(silmessage:string){
    this.messageSource2.next(silmessage)

  }
}
