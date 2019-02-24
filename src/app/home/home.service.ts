import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  makePostRequest(formData):Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', formData);
  }

}
