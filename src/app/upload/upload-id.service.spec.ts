import { TestBed } from '@angular/core/testing';

import { UploadIdService } from './upload-id.service';

describe('FileIdService', () => {
  let service: UploadIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
