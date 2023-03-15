import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private birdone:HeroService){}
  ngOnInit():void{
    let id:any=localStorage.getItem('id')
    let cat:any = localStorage.getItem('cat')

    
    if(cat==='birdOne'){
      let dataset=this.birdone.getSingle()
      this.single=dataset.filter(e=>e.name==id)
    }else if(cat==='birdTwo'){
      let dataset=this.birdone.getSinglea()
      this.single=dataset.filter(e=>e.name==id)
    }else if(cat==='birdThree'){
      let dataset=this.birdone.getSingleb()
      this.single=dataset.filter(e=>e.name==id)
    }
 
  //  console.log(this.single)
  }

}




