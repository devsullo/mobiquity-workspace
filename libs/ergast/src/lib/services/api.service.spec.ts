import { TestBed } from '@angular/core/testing';

import { ErgastApiService } from './api.service';

describe('ApiService', () => {
  let service: ErgastApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErgastApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
