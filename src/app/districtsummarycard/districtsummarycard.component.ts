import { NgxSpinnerService } from 'ngx-spinner';
import { StatewiseService } from './../statesummarycard/statewise.service';
import { DistrictwiseService } from './districtwise.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-districtsummarycard',
  templateUrl: './districtsummarycard.component.html',
  styleUrls: ['./districtsummarycard.component.scss'],
})
export class DistrictsummarycardComponent implements OnInit {
  districtlist: any[] = [];
  constructor(private districtservice: DistrictwiseService, private activateroute: ActivatedRoute,private route:Router,private statesetvice:StatewiseService,private spinner:NgxSpinnerService) { }
  
  stateList = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala","Ladakh","Madhya Pradesh","Maharashtra", "Manipur", "Meghalaya", "Mizoram",
   "Odisha", "Puducherry", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura","Uttar Pradesh", "West Bengal"];
    state = "Gujarat";
    sl:string="Gujarat";
   ngOnInit() {
    this.spinner.show();
    // this.activateroute.paramMap.subscribe(params => {
    //   console.log(params.get('state'))
    //   this.state = params.get('state');
    // })
    console.log(this.statesetvice.getListOfState());
    
    this.districtservice.getStateDistrictWise().subscribe(res => {
      setTimeout(()=>{this.spinner.hide()},500);
      console.log(res);
      if (JSON.stringify(res).includes(this.state)) {
        let disList = res[this.state].districtData;

        Object.keys(disList).map(dis => {

          if (dis === "Other State") {
            console.log("ma");
          }
          else {
            this.districtlist.push({ district: dis, districtSummary: disList[dis] })
          }
        
        })

        // console.log(this.districtlist.push({state:this.state}))



        // console.log(disList.Ahmedabad);
      

        // Object.keys(res[state].districtData).map(data =>{
        //   console.log(data, Object.values(res[state].districtData));
        // })
        // console.log(Object.keys(res[state].districtData));
        // this.statelist.push(res[state].districtData);
      }
      // console.log(res);
      // if(tri)

    })

  }




  onCountryClick() {

  }

  onClicked() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "firstname": "Nic",
      }
    };

    this.route.navigate(['/district-details'], navigationExtras);
  }
  onChnageOption(event) {
    this.districtlist = [];
    console.log(event.detail.value)
    this.districtservice.getStateDistrictWise().subscribe(res => {
      if (JSON.stringify(res).includes(event.detail.value)) {
        let disList = res[event.detail.value].districtData;

        Object.keys(disList).map(dis => {
          
          if (dis === "Other State") {
            console.log("ma");
          }
          else {
            this.districtlist.push({ district: dis, districtSummary: disList[dis] })
          }
        })
      }
    })
  }


}
