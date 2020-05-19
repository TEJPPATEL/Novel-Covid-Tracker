import { StatewiseService } from './../statesummarycard/statewise.service';
// import { mapdata } from 'mapdata';
// import { Uganda } from '@highcharts/map-collection/countries/in';
import { DistrictwiseService } from './../districtsummarycard/districtwise.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as Highcharts from 'highcharts/highmaps';
// import mapdata from '../../assets/mapdata'
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { NgxSpinnerService } from 'ngx-spinner';

// import * as Uganda from '../../assets/ug-all.geo';
// import mapdata from '../../assets/mapdata';
// import  from '../../assets/ug-all.geo.js';
// E: \Ionic\covid - tracker\node_modules\@highcharts\map - collection\countries\in\in -all.geo.json
// mapdata(Highcharts);
// const Uganda = require('@highcharts/map-collection/countries/in/in-all.geo.json');
// mapdata(Highcharts);

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.page.html',
  styleUrls: ['./state-details.page.scss'],
})
export class StateDetailsPage implements OnInit {
  @ViewChild('canPieState', { static: false }) private canPieState: ElementRef;
  @ViewChild('canBarState', { static: false }) private canBarState: ElementRef;

  state:Object;
  confirmedCases : number;
  activeCases:number;
  recoverCases:number;
  deathCases:number;


  stateName: string;
  constructor(private activeroute: ActivatedRoute, private stateservice:StatewiseService,private spinner:NgxSpinnerService) {
  
  }

  ngOnInit() {
    this.spinner.show();
    this.activeroute.paramMap.subscribe(params => {
      this.stateName = params.get('state');
      console.log(this.stateName);
    })
    let chartData;
    let mostAffectedStates: object[] = []; 
    this.stateservice.getStateData().subscribe(res => {
      console.log(res);
      console.log("state");
      res.data.statewise.map(statelist => {
          if(statelist.confirmed > 4000){
          
            mostAffectedStates.push(statelist);
            console.log()
          
          }

          // console.log(statelist["state"])
          if(statelist["state"]===this.stateName){
            // let state = statelist;
            // this.confirmedCases = statelist.confirmed;
            // console.log(this.confirmedCases)
            this.confirmedCases = statelist["confirmed"];
            this.activeCases = statelist["active"];
            this.recoverCases = statelist["recovered"];
            this.deathCases = statelist["deaths"];
            chartData = [this.confirmedCases, this.activeCases, this.recoverCases, this.deathCases];
            // this.piechart(chartData);
            // console.log(this.confirmedCases,this.activeCases,this.recoverCases,this.deathCases);
          }
          else{
            return;
          }


        })
    }, error => { console.log("error"); this.spinner.show();} , ()=> {
     
      this.piechart(chartData);
      this.barchart(mostAffectedStates);
      this.spinner.hide();
    })


  }
  piechart(myData) {
    // const ctx: HTMLCanvasElement = document.getElementById('PieChart').getContext('2d');
    // const ctx = canvas.getContext('2d')
    const data = {
      labels: ['Confirmed', 'Active', 'Recovered', 'Death'],
      position: 'bottom',
      fontColor: 'rgb(253, 199, 192)',
      // textAlign:,

      datasets: [
        {
          // label: '# of Votes',
          data: myData,
          backgroundColor: ['rgb(255, 150, 150)', 'rgb(192, 208, 253)', 'rgb(192, 253, 192)', 'rgba(219,219,219)'],
          borderColor: [],
          borderWidth: 2
        }


      ],
    }

    // var pieoptions: ChartOptions = {
    //   tooltips: { enabled: true, mode: 'nearest' },
    //   title: {
    //     display: true,
    //     position: 'top',
    //     text: 'corona',
    //   },

    //   animation: {
    //     duration: 500,
    //     easing: "easeOutQuart",
    //     onComplete: function () {
    //       var ctx = this.chart.ctx;
    //       ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
    //       ctx.textAlign = 'center';
    //       ctx.textBaseline = 'bottom';

    //       this.data.datasets.forEach((dataset) => {

    //         for (var i = 0; i < dataset.data.length; i++) {
    //           var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
    //             total = dataset._meta[Object.keys(dataset._meta)[0]].total,
    //             mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
    //             start_angle = model.startAngle,
    //             end_angle = model.endAngle,
    //             mid_angle = start_angle + (end_angle - start_angle) / 2;

    //           var x = mid_radius * Math.cos(mid_angle);
    //           var y = mid_radius * Math.sin(mid_angle);

    //           ctx.fillStyle = '#fff';
    //           if (i == 3) { // Darker text color for lighter background
    //             ctx.fillStyle = '#444';
    //           }
    //           var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
    //           //Don't Display If Legend is hide or value is 0
    //           if (dataset.data[i] != 0 && dataset._meta[0].data[i].hidden != true) {
    //             ctx.fillText(dataset.data[i], model.x + x, model.y + y);
    //             // Display percent in another line, line break doesn't work for fillText
    //             ctx.fillText(percent, model.x + x, model.y + y + 15);
    //           }
    //         }
    //       });
    //     }
    //   }
    // }
    var myChart = new Chart(this.canPieState.nativeElement, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: false,
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#ed576b",
          text: "Cases By Percentage"
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
  barchart(chartData) {
    console.log(chartData);
    // const ctx: HTMLCanvasElement = document.getElementById('BarChart').getContext('2d');
    // const ctx = canvas.getContext('2d')

    let confirmed = []
    let active = []
    let recovered = []
    let death = []
    let labels = []
    chartData.map(element => {
      console.log(element)
      labels.push(element.state);
      confirmed.push(element.confirmed);
      active.push(element.active)
      recovered.push(element.recovered);
      death.push(element.deaths);
    });
    const data = {
      labels: labels,
      position: 'bottom',
      fontColor: 'rgb(253, 199, 192)',
      // textAlign:,

      datasets: [

        // {
        //   // label: '# of Votes',
        //   data: myData,
        //   backgroundColor: ['rgb(253, 199, 192)', 'rgb(192, 208, 253)', 'rgb(192, 253, 192)','rgba(219,219,219)'],
        //   borderColor: [],
        //   borderWidth: 2
        // }
        {
          label: "Confirmed",
          backgroundColor: 'rgb(255, 150, 150)',
          data: confirmed,
        }, {
          label: "Active",
          backgroundColor: 'rgb(192, 208, 253)',
          data: active
        },
        {
          label: "Recover",
          backgroundColor: 'rgb(192, 253, 192)',
          data: recovered,
        }, {
          label: "Death",
          backgroundColor: 'rgba(219,219,219)',
          data: death
        }

      ],
    }

    // var pieoptions: ChartOptions = {
    //   tooltips: { enabled: true, mode: 'nearest' },
    //   title: {
    //     display: true,
    //     position: 'top',
    //     text: 'corona',
    //   },

    //   animation: {
    //     duration: 500,
    //     easing: "easeOutQuart",
    //     onComplete: function () {
    //       var ctx = this.chart.ctx;
    //       ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
    //       ctx.textAlign = 'center';
    //       ctx.textBaseline = 'bottom';

    //       this.data.datasets.forEach((dataset) => {

    //         for (var i = 0; i < dataset.data.length; i++) {
    //           var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
    //             total = dataset._meta[Object.keys(dataset._meta)[0]].total,
    //             mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
    //             start_angle = model.startAngle,
    //             end_angle = model.endAngle,
    //             mid_angle = start_angle + (end_angle - start_angle) / 2;

    //           var x = mid_radius * Math.cos(mid_angle);
    //           var y = mid_radius * Math.sin(mid_angle);

    //           ctx.fillStyle = '#fff';
    //           if (i == 3) { // Darker text color for lighter background
    //             ctx.fillStyle = '#444';
    //           }
    //           var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
    //           //Don't Display If Legend is hide or value is 0
    //           if (dataset.data[i] != 0 && dataset._meta[0].data[i].hidden != true) {
    //             ctx.fillText(dataset.data[i], model.x + x, model.y + y);
    //             // Display percent in another line, line break doesn't work for fillText
    //             ctx.fillText(percent, model.x + x, model.y + y + 15);
    //           }
    //         }
    //       });
    //     }
    //   }
    // }
    var myChart = new Chart(this.canBarState.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#ed576b",
          text: "Most Affected States"
        },
        responsive: true,
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
            fontStyle: '',
            fontSize: 9,
          }
        }
      }

    });
    myChart.update();
  }


  ngOnDestroy() {
    console.log("called");
    this.canPieState.nativeElement.remove();
    this.canBarState.nativeElement.remove();
  }
}
