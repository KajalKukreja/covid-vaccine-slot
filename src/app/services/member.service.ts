import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  addEmailAddress(email: string): Observable<any> {
    return this.http.post(environment.restApiEndpoint + 'email', email);
  }

  addMobileNumber(mobileNo: number): Observable<any> {
    return this.http.post(environment.restApiEndpoint + 'mobileno', mobileNo);
  }

}
