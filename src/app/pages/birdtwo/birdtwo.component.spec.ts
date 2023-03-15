import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdtwoComponent } from './birdtwo.component';

describe('BirdtwoComponent', () => {
  let component: BirdtwoComponent;
  let fixture: ComponentFixture<BirdtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
