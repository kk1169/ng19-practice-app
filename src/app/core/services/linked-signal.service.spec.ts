import { TestBed } from '@angular/core/testing';

import { LinkedSignalService } from './linked-signal.service';

describe('LinkedSignalService', () => {
  let service: LinkedSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkedSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
