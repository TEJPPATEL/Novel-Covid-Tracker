import { NgxSpinnerService } from 'ngx-spinner';
// import { Uganda } from '@highcharts/map-collection/countries/in';
import { StatewiseService } from './statewise.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { stat } from 'fs';;



@Component({
  selector: 'app-statesummarycard',
  templateUrl: './statesummarycard.component.html',
  styleUrls: ['./statesummarycard.component.scss'],
})

export class StatesummarycardComponent implements OnInit {
  statelist:any[]=[];
  constructor(private stateservice:StatewiseService,private route:Router,private spinner:NgxSpinnerService) { }
 state:string;
  ngOnInit() {
    this.spinner.show();

    this.stateservice.getStateData().subscribe(res => {
    console.log("state")
    console.log(res);
      // this.statelist = res.data.statewise;
    // if(res.data.statewise.confirmed > 0)
      
     res.data.statewise.map(data=>{
       
       if(data.confirmed>0){
         console.log(data.state)
         this.statelist.push(data); 
         setTimeout(()=>{
           this.spinner.hide();
         },1000)
         
       }
      
      });
    
    })



    // this.state = 'Gujarat';
    // this.stateservice.getStateDistrictWise().subscribe(res =>{
    //   console.log(res);
    //   if(JSON.stringify(res).includes(this.state)){
    //     let disList = res[this.state].districtData;

    //     Object.keys(disList).map(dis => {
          
    //       if (dis === "Other State"){
    //         console.log("ma");
    //       }   
    //       else{
    //       this.statelist.push({district:dis,districtSummary : disList[dis]})
    //       }
    //       console.log(dis,disList[dis]);
    //     })

    //     // console.log(disList.Ahmedabad);
    //     console.log(this.statelist);
        
    //     // Object.keys(res[state].districtData).map(data =>{
    //     //   console.log(data, Object.values(res[state].districtData));
    //     // })
    //     // console.log(Object.keys(res[state].districtData));
    //     // this.statelist.push(res[state].districtData);
    //   }
    //   // console.log(res);
    //   // if(tri)

    // })

  }
  onCountryClick(){

  }

  onClicked() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "firstname": "Nic",
      }
    };

    this.route.navigate(['/district-details'],navigationExtras);
  }

}
 