import { Injectable } from '@angular/core';
import { long,  terre ,omni} from 'src/assets/data';
// import { database } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return terre
  }
  getDataa(){
    return omni
  }
  getDatab(){
    return long
  }
  
  getSingle(){
    return terre
  }
  getSinglea(){
    return omni
  }
  getSingleb(){
     return long
  }
}
