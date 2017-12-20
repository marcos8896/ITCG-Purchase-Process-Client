import { TestBed, inject } from '@angular/core/testing';

import { Config.UrlService } from './config.url.service';

describe('Config.UrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Config.UrlService]
    });
  });

  it('should be created', inject([Config.UrlService], (service: Config.UrlService) => {
    expect(service).toBeTruthy();
  }));
});
