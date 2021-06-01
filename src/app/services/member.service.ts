import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  addMember(email: string, mobileNo: number, pincode: number, districtId: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('email', email);
    params = params.set('mobile_no', mobileNo != null ? mobileNo.toString() : '');
    params = params.set('pincode', pincode != null ? pincode.toString() : '');
    params = params.set('district_id', districtId != null ? districtId.toString() : '');

    return this.http.post(environment.backendApiEndpoint + '?member', '', { params: params });
  }

}
