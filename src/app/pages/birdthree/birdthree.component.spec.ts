import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdthreeComponent } from './birdthree.component';

describe('BirdthreeComponent', () => {
  let component: BirdthreeComponent;
  let fixture: ComponentFixture<BirdthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
