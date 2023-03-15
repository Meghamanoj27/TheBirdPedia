import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletwoComponent } from './singletwo.component';

describe('SingletwoComponent', () => {
  let component: SingletwoComponent;
  let fixture: ComponentFixture<SingletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
