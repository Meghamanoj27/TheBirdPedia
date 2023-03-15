import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-birdtwo',
  templateUrl: './birdtwo.component.html',
  styleUrls: ['./birdtwo.component.css']
})
export class BirdtwoComponent {
  omni:any
constructor(private objtwo:HeroService,private router:Router){
  }
  

  ngOnInit(){
    this.omni=this.objtwo.getDataa();
  }

  gotoHerez(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['single']);
  }
}
