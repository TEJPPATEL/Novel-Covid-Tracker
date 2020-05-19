import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountrySummary } from './country.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountrySummaryService {

  constructor(private http:HttpClient) { }

  getCountriesSummaryData(): Observable<CountrySummary[]>{
    return this.http.get<CountrySummary[]>('https://disease.sh/v2/countries');
  }
}
