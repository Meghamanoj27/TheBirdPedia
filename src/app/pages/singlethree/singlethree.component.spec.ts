import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglethreeComponent } from './singlethree.component';

describe('SinglethreeComponent', () => {
  let component: SinglethreeComponent;
  let fixture: ComponentFixture<SinglethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglethreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
