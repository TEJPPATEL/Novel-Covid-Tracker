import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StatewiseService {

  stateList:any[]=[];
  constructor(private http:HttpClient,private route:Router) { }
  getStateDistrictWise():Observable<any[]>{
    return this.http.get<any>('https://api.covid19india.org/state_district_wise.json');
  }
 getStateData():Observable<State>{
   return this.http.get<State>('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
 }

 setListOfState(statelist:[]){
  // this.stateList.push(this.stateList);
  this.stateList = statelist
 }

 getListOfState(){
   return this.stateList;
 }

}

