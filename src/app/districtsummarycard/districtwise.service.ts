import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictwiseService {

  state:object
  constructor(private http: HttpClient, private route: Router) { }
  getStateDistrictWise(): Observable<any[]> {
    return this.http.get<any>('https://api.covid19india.org/state_district_wise.json');
  }
  // setState(data){
  //   this.state = data;
  // }
  // getState(){
  // return this.state
  // }


  getDistrictWiseData(){
    return this.http.get('https://api.covid19india.org/v2/state_district_wise.json');
  }
}
