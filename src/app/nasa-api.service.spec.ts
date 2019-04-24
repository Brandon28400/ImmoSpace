import { TestBed } from '@angular/core/testing';

import { NasaAPIService } from './nasa-api.service';

describe('NasaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaAPIService = TestBed.get(NasaAPIService);
    expect(service).toBeTruthy();
  });
});
