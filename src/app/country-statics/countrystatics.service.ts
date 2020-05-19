import { CountryHistory } from './countryhistory.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrystaticsService {

  constructor(private http:HttpClient) { }
  getCountryHistoricData():Observable<CountryHistory>{
    return this.http.get<CountryHistory>('https://corona.blloc.com/historic?country=India');
  }
}
