import { Summary } from './summary.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  constructor(private http:HttpClient) { }
  getCasesSummary():Observable<Summary>
  {
    
    return this.http.get<Summary>('https://corona.blloc.com/current?country=India');
    // return this.http.get<Summary>('https://api.rootnet.in/covid19-in/stats/latest')
    // return this.http.get<Summary>(`https://covid-api.com/api/reports/total?date=${date}`);
  }
}
