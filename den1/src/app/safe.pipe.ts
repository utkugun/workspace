import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  message: string = "";
  subscription: Subscription;
  kah: any;
  abilityresourcename:string=""
  constructor(private sanitizer: DomSanitizer,private api: ApiService, private data: DataService) {}

  transform(value: string): any {   



if(value.includes('{{ abilityresourcename }}')==true)  {
  
  this.subscription = this.data.currentMessage.subscribe((message: any) =>{ 
  this.message = message
  
  
  this.api.getdetay(this.message).subscribe((d: Record<any, any>) => {
   
    this.abilityresourcename=d["data"][this.message]["partype"]
  
  })
  })
 
  return JSON.stringify(this.abilityresourcename)



  
}
else{
  return this.sanitizer.bypassSecurityTrustHtml(value)
}
      



     


    
     
      


  
}}
