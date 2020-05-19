import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { CountrystaticsService } from './countrystatics.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-country-statics',
  templateUrl: './country-statics.page.html',
  styleUrls: ['./country-statics.page.scss'],
})
export class CountryStaticsPage implements OnInit {

  @ViewChild('countryline1', { static: false }) countryline1:ElementRef;
  @ViewChild('countryline2', { static: false }) countryline2: ElementRef;
  @ViewChild('countryline3', { static: false }) countryline3: ElementRef;
  @ViewChild('countryline4', { static: false }) countryline4: ElementRef;

  constructor(private countrystaticsservice:CountrystaticsService,private spinner:NgxSpinnerService) {
  
   }

  ngOnInit() {
    this.spinner.show();
    let historyData:any[] = [];
    this.countrystaticsservice.getCountryHistoricData().subscribe(data =>{
    data["federal"].map(data => {
      if(data.date === null)
      {
        let date = new Date().getDate();
        let month = new Date().getMonth()+1;
        let year = new Date().getFullYear();
       let updateddate :string ;
        let updatedmonth : string ;
        updateddate = date<10 ? "0"+date.toString() : date.toString();
        updatedmonth = month < 10 ? "0"+month.toString():month.toString();       
        let day : string = year + "-"+updatedmonth+"-"+updateddate;
        // // console.log(new Date().format('m-d-Y h:i:s'));
        historyData.push({ date:day , confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, active: data.confirmed - data.recovered - data.deaths });
        // console.log(new Date().getDate());
      }
      else{
      
        historyData.push({ date: data.date.split("T")[0], confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, active: data.confirmed - data.recovered - data.deaths });
      // console.log(data.date.split("T"));
      }
      // console.log(data.date.split("T")[0]);
  
      // console.log(data);
      // let date = data["date"].toString().split("T");
      // console.log(data["date"].toString());
      // 
    })
    // data["federal"].map(data => {
    //   historyData.push(data.date.toString().toSplit("T")[0],data.confirmed);

    // });
    },error => {
        this.spinner.show();
      console.log("Eror Occured")
    },
    ()=>{
      let history:any[] = [] ; 
      for(let i = historyData.length-30 ; i < historyData.length ; i++)
        history.push(historyData[i]);

      this.chart1(historyData);
      this.chart2(historyData);
      this.chart3(historyData);
      this.chart4(historyData);
      this.spinner.hide();
      // let i=1;
      // // console.log(historyData);
      // historyData.map(element =>{
      //   console.log(element)  
      //   i++;    
      // })
      // console.log(historyData.length)
    }
    )
    
  
  
   
  }

  chart1(datails) {
    
    let date :any[]= [];
    let confirmedCases :any [] = []
   datails.map(res => 
      {
        date.push(res.date);
        confirmedCases.push(res.confirmed)
        console.log(date,confirmedCases);
      });
    
    const data = {
      labels:date,

      datasets: [
        {
          // label: '# of Votes',
          data: confirmedCases,
          label: "Confirmed Cases",
          borderColor: "rgb(255, 150, 150)",
          fill: true,
          backgroundColor:"rgba(255, 150, 150,0.3)",
        }
      ],
    }
    // const ctx = document.getElementById("line-chart1").getContext("2d")
    var myChart = new Chart(this.countryline1.nativeElement, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio:true,
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#000",
          text: "Confirmed Cases Spread Trends"
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0,0,0)',
            fontSize: 15,
            fontStyle: 'bold',
          }
        },
        plugins: {
          // render: 'value',
          labels: {
            render: 'percentage',
            fontStyle: 'bold',
            fontSize: 15,
          }
        }
      }

    });
    myChart.update();
  }
  chart2(datails) {
    let date: any[] = [];
    let activeCases: any[] = []
    datails.map(res => {
      date.push(res.date);
      activeCases.push(res.active)
      console.log(date, activeCases);
    });

    const data = {
      labels: date,

      datasets: [
        {
          // label: '# of Votes',
          data: activeCases,
          label: "Active Cases",
          borderColor: "rgb(192, 208, 253)",
          fill: true,
          backgroundColor: "rgba(198, 208, 253,0.3)",
        }
      ],
    }
    // const ctx = document.getElementById("line-chart2").getContext("2d")
    var myChart = new Chart(this.countryline2.nativeElement, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio:true,
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#000",
          text: "Active Cases Spread Trends"
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0,0,0)',
            fontSize: 15,
            fontStyle: 'bold',
          }
        },
        plugins: {
          // render: 'value',
          labels: {
            render: 'percentage',
            fontStyle: 'bold',
            fontSize: 15,
          }
        }
      }

    });
    myChart.update();
  }
  chart3(datails) {
    let date :any[]= [];
    let recoverCases :any [] = []
   datails.map(res => 
      {
        date.push(res.date);
        recoverCases.push(res.recovered)
        console.log(date,recoverCases);
      });
    
    const data = {
      labels:date,

      datasets: [
        {
          // label: '# of Votes',
          data: recoverCases,
          label: "Recovered Cases",
          borderColor: "rgb(192, 253, 192)",
          backgroundColor: "rgba(192, 253, 192,0.3)",
          fill: true,
        }
      ],
    }
    // const ctx = document.getElementById("line-chart3").getContext("2d")
    var myChart = new Chart(this.countryline3.nativeElement, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio:true,
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#000",
          text: "Recovered Cases Spread Trends"
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0,0,0)',
            fontSize: 15,
            fontStyle: 'bold',
          }
        },
        plugins: {
          // render: 'value',
          labels: {
            render: 'percentage',
            fontStyle: 'bold',
            fontSize: 15,
          }
        }
      }

    });
    myChart.update();
  }
  chart4(datails) {
    let date: any[] = [];
    let DeathCases: any[] = []
    datails.map(res => {
      date.push(res.date);
      DeathCases.push(res.confirmed)
      console.log(date, DeathCases);
    });

    const data = {
      labels: date,

      datasets: [
        {
          // label: '# of Votes',
          data: DeathCases,
          label: "Death Cases",
          borderColor: "rgba(219,219,219)",
          backgroundColor: "rgba(219, 219, 219,0.3)",
          fill: true,
        }
      ],
    }
    // const ctx = document.getElementById("line-chart4").getContext("2d");
    var myChart = new Chart(this.countryline4.nativeElement, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio:true,
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#000",
          text: "Death Cases Spread Trends"
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0,0,0)',
            fontSize: 15,
            fontStyle: 'bold',
          }
        },
        plugins: {
          // render: 'value',
          labels: {
            render: 'percentage',
            fontStyle: 'bold',
            fontSize: 15,
          }
        }
      }

    });
    myChart.update();
  }
  
  ngOnDestroy() {
    console.log("called");
    this.countryline1.nativeElement.remove();
    this.countryline2.nativeElement.remove();
    this.countryline3.nativeElement.remove();
    this.countryline4.nativeElement.remove();
  }
}
