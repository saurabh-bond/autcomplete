import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Autocomplete } from './autocomplete';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  baseUrl:string = "http://localhost/virtualdomain/autocomplete/backend";

  constructor(private httpClient : HttpClient) { }


  public autoComplete(search :string): Observable<Autocomplete[]>
  {
    return this.httpClient.get<Autocomplete[]>(
        this.baseUrl + '/fetchCourse?'+ 'search=' + search
    );
  }

}
