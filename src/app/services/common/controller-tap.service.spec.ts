import { TestBed } from '@angular/core/testing';

import { ControllerTapService } from './controller-tap.service';

describe('ControllerTapService', () => {
  let service: ControllerTapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerTapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
