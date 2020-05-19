import { Observable } from 'rxjs';
import { WorldHistory } from './worldhistory.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldstaticsService {

  constructor(private http:HttpClient) { }

  //scrapped data from various site coming through corona.blloc.com/history
  getWorldHistory() : Observable<WorldHistory>{
    return this.http.get<WorldHistory>('https://corona.blloc.com/historic?country');
  }
}
