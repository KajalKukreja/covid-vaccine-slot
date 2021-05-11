import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StatesService {

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    const url = environment.cowinEndpoint + 'admin/location/states';
    return this.http.get(url);
  }
}
