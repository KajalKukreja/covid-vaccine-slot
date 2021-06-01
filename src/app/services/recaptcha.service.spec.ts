import { TestBed, async, inject } from '@angular/core/testing';
import { ReCaptchaService } from './recaptcha.service';

describe('ReCaptchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReCaptchaService]
    });
  });

  it('should ...', inject([ReCaptchaService], (service: ReCaptchaService) => {
    expect(service).toBeTruthy();
  }));
});
