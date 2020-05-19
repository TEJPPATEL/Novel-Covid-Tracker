import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../tab2/summary.model';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {
  constructor(private http: HttpClient) { }
  getCasesSummary(): Observable<Summary> {
   
    return this.http.get<Summary>('https://covid-api.com/api/reports/total');
    // return this.http.get<Summary>(`https://covid-api.com/api/reports/total?date=${date}`);
  }
  
}
