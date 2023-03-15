import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdComponent } from './pages/bird/bird.component';
import { BirdoneComponent } from './pages/birdone/birdone.component';
import { BirdthreeComponent } from './pages/birdthree/birdthree.component';
import { BirdtwoComponent } from './pages/birdtwo/birdtwo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { Gallary2Component } from './pages/gallary2/gallary2.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { SinglethreeComponent } from './pages/singlethree/singlethree.component';
import { SingletwoComponent } from './pages/singletwo/singletwo.component';
import { SnapComponent } from './pages/snap/snap.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
   },
   {
    path:'bird',component:BirdComponent
   },
   {
    path:'birdone',component:BirdoneComponent
   },
   {
    path:'birdtwo',component:BirdtwoComponent
   },
   {
    path:'birdthree',component:BirdthreeComponent
   },
   {
    path:'single',component:SingleComponent
   },
   {
    path:'singletwo',component:SingletwoComponent
   },
   {
    path:'singlethree',component:SinglethreeComponent
   },
   {
    path:'contact',component:ContactComponent
   },
   {
    path:'gallary',component:GallaryComponent
   },
   {
    path:'gallary2',component:Gallary2Component
   },
   {
    path:'signin',component:SigninComponent
   },
   {
    path:'signup',component:SignupComponent
   },
   {
    path:'snap',component:SnapComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
