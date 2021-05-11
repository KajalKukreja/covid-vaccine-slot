import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DistrictsService {

  constructor(private http: HttpClient) { }

  getDistricts(state_id: number): Observable<any> {
    const url = environment.cowinEndpoint + 'admin/location/districts/' + state_id;
    return this.http.get(url);
  }
}

