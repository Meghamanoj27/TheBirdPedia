import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdoneComponent } from './pages/birdone/birdone.component';
import { BirdComponent } from './pages/bird/bird.component';
import { BirdtwoComponent } from './pages/birdtwo/birdtwo.component';
import { BirdthreeComponent } from './pages/birdthree/birdthree.component';
import { SingleComponent } from './pages/single/single.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SingletwoComponent } from './pages/singletwo/singletwo.component';
import { SinglethreeComponent } from './pages/singlethree/singlethree.component';
import { FooterComponent } from './utils/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { Gallary2Component } from './pages/gallary2/gallary2.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SnapComponent } from './pages/snap/snap.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdoneComponent,
    BirdComponent,
    BirdtwoComponent,
    BirdthreeComponent,
    SingleComponent,
    HomeComponent,
    NavbarComponent,
    SingletwoComponent,
    SinglethreeComponent,
    FooterComponent,
    ContactComponent,
    GallaryComponent,
    Gallary2Component,
    SigninComponent,
    SignupComponent,
    SnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
