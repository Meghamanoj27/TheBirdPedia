import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-birdthree',
  templateUrl: './birdthree.component.html',
  styleUrls: ['./birdthree.component.css']
})
export class BirdthreeComponent {
constructor(private obj:HeroService,private router:Router){}

long=this.obj.getDatab();

gotoHere(id:any){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
}
