import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singletwo',
  templateUrl: './singletwo.component.html',
  styleUrls: ['./singletwo.component.css']
})
export class SingletwoComponent {
  singletwo:any
  constructor(private birdtwo:HeroService){}
    ngOnInit():void{
      let id:any=localStorage.getItem('id')
      let dataset=this.birdtwo.getSinglea()
      this.singletwo=dataset.filter(e=>e.name==id)
      console.log(this.singletwo)
    }
  }


