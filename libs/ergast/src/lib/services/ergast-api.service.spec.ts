import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErgastApiService } from './ergast-api.service';

describe('ErgastApiService', () => {
  let service: ErgastApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ErgastApiService,
        {
          provide: 'env',
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(ErgastApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
