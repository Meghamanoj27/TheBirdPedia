import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdoneComponent } from './birdone.component';

describe('BirdoneComponent', () => {
  let component: BirdoneComponent;
  let fixture: ComponentFixture<BirdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
