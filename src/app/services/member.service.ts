import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  addMember(email: string, mobileNo: number, pincode: number, districtId: number, age: number, dose: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('email', (email != null && email != undefined) ? email : 'NULL');
    params = params.set('mobile_no', (mobileNo != null && mobileNo != undefined) ? mobileNo.toString() : 'NULL');
    params = params.set('pincode', (pincode != null && pincode != undefined) ? pincode.toString() : 'NULL');
    params = params.set('district_id', (districtId != null && districtId != undefined) ? districtId.toString() : 'NULL');
    params = params.set('age', (age != null && age != undefined) ? age.toString() : 'NULL');
    params = params.set('dose', (dose != null && dose != undefined) ? dose : 'NULL');

    return this.http.post(environment.backendApiEndpoint + '?member', '', { params: params });
  }

}
