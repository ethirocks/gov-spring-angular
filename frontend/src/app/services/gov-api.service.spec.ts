import { TestBed } from '@angular/core/testing';

import { GovApiService } from './gov-api.service';

describe('GovApiService', () => {
  let service: GovApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
