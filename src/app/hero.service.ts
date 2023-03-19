import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { long,  terre ,omni} from 'src/assets/data';
// import { database } from 'src/assets/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
    signup(email:string,password:string){
      createUserWithEmailAndPassword(this.auth,email,password).then(res=>{
        alert("signup successfully")
        this.router.navigate(['/home'])
      }).catch(err=>{
        alert(err)
      })
    }  
      signin(email:string,password:string){
        signInWithEmailAndPassword(this.auth,email,password).then(res=>{
        alert("signin successfully")
        this.router.navigate(['/home'])
      }).catch(err=>{
        alert(err)
      })
      }


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
