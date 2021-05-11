import { TestBed, async, inject } from '@angular/core/testing';
import { VaccineSlotsService } from './vaccine-slots.service';

describe('VaccineSlotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaccineSlotsService]
    });
  });

  it('should ...', inject([VaccineSlotsService], (service: VaccineSlotsService) => {
    expect(service).toBeTruthy();
  }));
});
