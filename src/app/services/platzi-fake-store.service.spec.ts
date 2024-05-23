import { TestBed } from '@angular/core/testing';

import { PlatziFakeStoreService } from './platzi-fake-store.service';

describe('PlatziFakeStoreService', () => {
  let service: PlatziFakeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatziFakeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
