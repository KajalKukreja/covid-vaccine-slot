import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ReCaptchaService {

  constructor(private http: HttpClient) { }

  verifyReCaptcha(response: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('response', response);

    return this.http.post(environment.backendApiEndpoint + '?recaptcha', '', { params: params });
  }
}

