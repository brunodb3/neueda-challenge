// url.service.spec.ts
//  - url service test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { TestBed, inject } from '@angular/core/testing';

// importing custom modules
import { UrlService } from '@app/url/url.service';

// declaring UrlService test suite
describe('UrlService', () => {
  // configuring the test module
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlService]
    });
  });

  // declaring tests
  // should create the service injectable
  it('should be created', inject([UrlService], (service: UrlService) => {
    expect(service).toBeTruthy();
  }));
});
