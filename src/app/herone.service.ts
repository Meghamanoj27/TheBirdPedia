import { Injectable } from '@angular/core';
import { omni } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroneService {

  constructor() { }

  getDataa(){
    return omni
  }
  getSingletwo(id:any){
    return omni
  }
}
