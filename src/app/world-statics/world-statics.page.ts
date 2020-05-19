import { NgxSpinnerService } from 'ngx-spinner';
import { WorldstaticsService } from './worldstatics.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';
@Component({
  selector: 'app-world-statics',
  templateUrl: './world-statics.page.html',
  styleUrls: ['./world-statics.page.scss'],
})
export class WorldStaticsPage implements OnInit {

  constructor(private worldstatics:WorldstaticsService,private spinner:NgxSpinnerService) { }
  @ViewChild('worldline1', { static: false }) worldline1:ElementRef;
  @ViewChild('worldline2', { static: false }) worldline2:ElementRef;
  @ViewChild('worldline3', { static: false }) worldline3:ElementRef;
  @ViewChild('worldline4', { static: false }) worldline4: ElementRef;

  ngOnInit() {
    this.spinner.show();
    let worldhistory:any[] = [];
    this.worldstatics.getWorldHistory().subscribe(res =>{
      // console.log(res);
      res["federal"].map(data => {
        if (data.date === undefined || data.date === null) {
          let date = new Date().getDate();
          let month = new Date().getMonth() + 1;
          let year = new Date().getFullYear();
          let updateddate: string;
          let updatedmonth: string;
          updateddate = date < 10 ? "0" + date.toString() : date.toString();
          updatedmonth = month < 10 ? "0" + month.toString() : month.toString();
          let day: string = year + "-" + updatedmonth + "-" + updateddate;
          // // console.log(new Date().format('m-d-Y h:i:s'));
          // historyData.push({ date: day, confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, active: data.confirmed - data.recovered - data.deaths });
          // console.log(new Date().getDate());
        }
        else{
        // let date = data.date.toString().split("T")[0];
        worldhistory.push({ date: data.date.split("T")[0],confirmed:data.confirmed,recovered:data.recovered,deaths:data.deaths,active:data.confirmed-data.recovered-data.deaths});
        }
      })
      console.log(worldhistory);
    },error => {
      this.spinner.show();
      console.log("error in worldwide statics asynchronous data from server");
    },()=>{
      this.chart1(worldhistory);
      this.chart2(worldhistory);
      this.chart3(worldhistory);
      this.chart4(worldhistory);
      this.spinner.hide();
    })
 
  }
  ngOnDestroy() {
    console.log("called");
   this.worldline1.nativeElement.remove();
   this.worldline2.nativeElement.remove();
    this.worldline3.nativeElement.remove();
    this.worldline4.nativeElement.remove();
  }

  
  chart1(details) {
    let date: any[] = [];
    let confirmedCases: any[] = []
    details.map(res => {
      date.push(res.date);
      confirmedCases.push(res.confirmed)
      console.log(date, confirmedCases);
    });

    const data = {
      labels: date,

      datasets: [
        {
          // label: '# of Votes',
          data: confirmedCases,
          label: "Confirmed Cases",
          borderColor: "rgb(255, 150, 150)",
          fill: true,
          backgroundColor: "rgba(255, 150, 150,0.3)",
        }
      ],
    }
    // const ctx = document.getElementById("line-chart1").getContext("2d");
    var myChart = new Chart(this.worldline1.nativeElement, {
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
  chart2(details) {
    let date: any[] = [];
    let activeCases: any[] = []
    details.map(res => {
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
    // const ctx = document.getElementById("line-chart2").getContext("2d");
    var myChart = new Chart(this.worldline2.nativeElement, {
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
  chart3(details) {
    let date: any[] = [];
    let recoverCases: any[] = []
    details.map(res => {
      date.push(res.date);
      recoverCases.push(res.recovered)
      console.log(date, recoverCases);
    });

    const data = {
      labels: date,

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
    // const ctx = document.getElementById("line-chart3").getContext("2d");
    var myChart = new Chart(this.worldline3.nativeElement, {
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
  chart4(details) {
    let date: any[] = [];
    let DeathCases: any[] = []
    details.map(res => {
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
    // const ctx = document.getElementById("line-chart4").getContext("2d")
    var myChart = new Chart(this.worldline4.nativeElement, {
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

}
