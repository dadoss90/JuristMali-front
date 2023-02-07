import { TestBed } from '@angular/core/testing';

import { RenseignementService } from './renseignement.service';

describe('RenseignementService', () => {
  let service: RenseignementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenseignementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
