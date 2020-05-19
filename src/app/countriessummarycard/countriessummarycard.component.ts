import { NgxSpinnerService } from 'ngx-spinner';
import { async } from '@angular/core/testing';
import { CountrySummary } from './country.model';
import { CountrySummaryService } from './country-summary.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countriessummarycard',
  templateUrl: './countriessummarycard.component.html',
  styleUrls: ['./countriessummarycard.component.scss'],
})
export class CountriessummarycardComponent implements OnInit {
  
  constructor(private countrysummaryservice:CountrySummaryService,private route:Router,private spinner:NgxSpinnerService) { }
  countrysummarydata : CountrySummary[];
  searchText;
  myData : any[] = [];
  
  dataSource: any;
  type: string;
  width: string;
  height: string;
  dataFormat:string;
  
  data:any[] = [];
  ngOnInit() {
    this.spinner.show();
    this.height="440";
    this.width="590";
    this.type="world"
    // this.type = "maps/worldwithcountries";
    this.dataFormat  ="json"
    this.dataSource = {
      data: [{
        "id": "01",
        "label":"Antigua and Barbuda",
        "value": "515"
      },
        {
          "id": "02",
          "label": "Bahamas",
          "value": "373"
        },
        {
          "id": "03",
          "label": "Barbados",
          "value": "3875"
        },
        {
          "id": "04",
          "label":"Belize",
          "value": "727"
        },
        {
          "id": "05",
          "label": "Canada",
          "value": "885"
        },
        {
          "id": "06",
          "label": "Costa Rica",
          "value": "32"
        }]
    }









   console.log(this.searchText);
   
    this.countrysummaryservice.getCountriesSummaryData().subscribe(data => {
     this.countrysummarydata = data;
     
     data.map(data => { 
        let country =  data.country ;
        this.data.push([country, data.cases])});
      console.log(this.myData);
      this.spinner.hide();   
       },error => {console.log("Error")},()=>{
         this.spinner.show();
         this.myData = this.data;
        console.log("completed");
       })


  }
  onCountryClick() {
    this.route.navigate(['/country-details'])
  }
 
}
