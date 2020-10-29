import { TestBed } from '@angular/core/testing';

import { DenemeservisService } from './denemeservis.service';

describe('DenemeservisService', () => {
  let service: DenemeservisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenemeservisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
