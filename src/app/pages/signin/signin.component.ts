import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
   email:string=''
   password:string=''

   constructor(private fires:HeroService){}
    signin(){
      this.fires.signin(this.email,this.password)
      this.email=''
      this.password=''
    }
}

