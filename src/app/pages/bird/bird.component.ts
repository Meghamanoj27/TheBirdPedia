import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent {

  constructor(private router:Router){}

  birdOne(){
    localStorage.setItem('cat','birdOne')
    this.router.navigate(['/birdone'])
  }

  birdTwo(){
    localStorage.setItem('cat','birdTwo')
    this.router.navigate(['/birdtwo'])
  }

  birdThree(){
    localStorage.setItem('cat','birdThree')
    this.router.navigate(['/birdthree'])
  }
}
