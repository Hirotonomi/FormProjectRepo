import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SService {
  constructor (){}

  jsonForForm = {
    "ala" : {"type":"text"},
    "ma": {"type":"number"},
    "kota":{"type":"select","options":["a","b","c"]} 
    }


  getFormData(){
    return this.jsonForForm
  }
  
}
