import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SService {
  constructor() {
    var jsonForForm = [
      { "type": "text", "name": "ala", "label": "ala" },
      {
        "type": "number", "name": "ma", "label": "ma"
      },
      {
        "type": "select", "name": "kota", "label": "kota", "options": ["a","b","c"]
      }
    ]
   }
}
