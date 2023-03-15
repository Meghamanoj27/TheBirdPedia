import { TestBed } from '@angular/core/testing';

import { HeroneService } from './herone.service';

describe('HeroneService', () => {
  let service: HeroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
