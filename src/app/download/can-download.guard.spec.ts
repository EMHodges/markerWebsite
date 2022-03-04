import { TestBed } from '@angular/core/testing';

import { CanDownloadGuard } from './can-download.guard';

describe('CanDownloadGuard', () => {
  let guard: CanDownloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDownloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
