import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DistrictsService {

  constructor(private http: HttpClient) { }

  getDistricts(stateId: number): Observable<any> {
    const url = environment.cowinEndpoint + 'admin/location/districts/' + stateId;
    return this.http.get(url);
  }
}

