import { TestBed, inject } from '@angular/core/testing';

import { BasicRequestService } from './basic-request.service';

describe('BasicRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicRequestService]
    });
  });

  it('should be created', inject([BasicRequestService], (service: BasicRequestService) => {
    expect(service).toBeTruthy();
  }));
});
