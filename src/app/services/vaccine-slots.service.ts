import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class VaccineSlotsService {

  private date: string;

  constructor(private http: HttpClient) {
    const currDate = new Date();
    this.date = currDate.getDate() + '-' + (currDate.getMonth() + 1) + '-' + currDate.getFullYear();
  }

  getSlotsByPincode(pincode: number): Observable<any> {
    const url = environment.cowinEndpoint + 'appointment/sessions/public/calendarByPin?pincode=' + pincode + '&date=' + this.date;
    return this.http.get(url);
  }

  getSlotsByDistrict(districtId: number): Observable<any> {
    const url = environment.cowinEndpoint + 'appointment/sessions/public/calendarByDistrict?district_id=' + districtId + '&date=' + this.date;
    return this.http.get(url);
  }
}
