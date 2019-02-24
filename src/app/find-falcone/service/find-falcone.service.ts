import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FindFalconeService {

  private token: string;

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get('https://findfalcone.herokuapp.com/planets');
  }

  getVehicles(): Observable<any> {
    return this.http.get('https://findfalcone.herokuapp.com/vehicles');
  }

  getToken(): Observable<any>  {
    return this.http.post('https://findfalcone.herokuapp.com/token', {});
  }

  findFalcone(arg): Observable<any> {
    return this.http.post('https://findfalcone.herokuapp.com/find', arg);
  }

}
