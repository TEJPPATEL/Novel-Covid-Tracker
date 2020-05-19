import { NgxSpinnerService } from 'ngx-spinner';
import { Tab1Service } from './../tab1/tab1.service';
import { CountrySummaryService } from './../countriessummarycard/country-summary.service';
import { StatewiseService } from './../statesummarycard/statewise.service';
import { formatDate } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Tab2Service } from './tab2.service';

import { IonSlides } from '@ionic/angular';
import { Chart} from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('casesslide', { static: true }) casesslide: IonSlides;
  constructor(private tab2service: Tab2Service,private countryservice:CountrySummaryService,private tab1service:Tab1Service,private spinner:NgxSpinnerService) { }
  slideOpts;
  confirmedCases: number;
  activeCases: number;
  recoverCases: number;
  indianconfirmed:number;
  deathCases: number;
  @ViewChild('canvasRef', { static: false }) canvasRef;
  @ViewChild('canPie1', { static: false }) private canPie1: ElementRef;
  @ViewChild('canPie2', { static: false }) private canPie2: ElementRef;
  @ViewChild('canBar', { static: false }) private canBar: ElementRef;

  // myData: any = [
    
  //   ['Germany', 200],
  //   ['United States', 300],
  //   ['Brazil', 400],
  //   ['Canada', 500],
  //   ['France', 600],
  //   ['RU', 700]
  // ];

  // myOptions = {
  //   colors: ['#ff440e', '#ff693e', '#ff8f6e', '#ffb49f', '#ffc7b6'],
  //   // is3D: true,

  //   vAxis: {
  //     gridlines: {
  //       color: 'transparent'
  //     }
  //   }
  // };


  chart(myData,ctx) {
    // const ctx: HTMLCanvasElement = document.getElementById(id).getContext('2d');
    // const ctx = canvas.getContext('2d')
    console
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
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: false,
        title: {
          display: false,
          fontSize: 20,
          fontColor: "#ed576b",
          text: "Statics"
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

  ngOnInit() {
    this.spinner.show();
    
    //   google.charts.load('current', { 'packages': ['corechart'] });
    // google.charts.setOnLoadCallback(() => this.drawChart);
   
    // console.log(this.chartvc)
    let month = new Date().getMonth() + 1;
    let formatedmonth = month < 10 ? "0" + month : month;
    let date = new Date().getDate();
    let formateddate = date < 10 ? "0" + Number(date - 1) : date - 1;
    let foramtedDate = new Date().getFullYear() + "-" + formatedmonth + "-" + formateddate;
    console.log(foramtedDate);
    let mydata ;
    let myCountryData = [];
    this.tab2service.getCasesSummary().subscribe(res => {
      this.confirmedCases = res.data.confirmed;
      this.activeCases = res.data.active;
      this.deathCases = res.data.deaths;
      this.recoverCases = res.data.recovered;
      mydata = [this.confirmedCases, this.activeCases, this.deathCases, this.recoverCases]
     
      // this.chart(mydata, "PieChart2");
    },error=>{},()=>{
      this.countryservice.getCountriesSummaryData().subscribe(res => {
        console.log(res)
        res.map(element => {
          myCountryData.push([element.country,element.cases])
        })
        console.log(myCountryData);
        this.chart(mydata,this.canPie1.nativeElement);
        // myCountryData.push([res]);
        // this.drawchart(myCountryData);
      })
    });
    // let indianconfirmed;
    // let indianactive;
    // let indianRecovered;
    // let indianDeaths;
    let indianCases:number[];
    this.tab1service.getCasesSummary().subscribe(res => {
      this.indianconfirmed = res.confirmed;
      // indianRecovered = res.recovered;
      // indianDeaths = res.deaths;
      // indianactive = res.confirmed - res.recovered - res.deaths;
      indianCases = [res.confirmed,res.confirmed-res.recovered-res.deaths,res.recovered,res.deaths];
    },
    error => { console.log("Error in indian confirmed cases")},
    ()=>{
      this.chart(indianCases,this.canPie2.nativeElement);
      this.spinner.hide();
    }
    )

    

    // let len;
    // this.casesslide.length().then(data => {
    //   len = data;
    // })

    this.slideOpts = {
      initialSlide: 0,
      speed: 400,

    };
    this.casesslide.startAutoplay();
    // this.casesslide

    setInterval(() => {
      this.casesslide.startAutoplay();
    }, 1000);

  }
  // chart(myDa) {
  //   // const ctx:HTMLCanvasElement = document.getElementById('myChart').getContext('2d');
  //   // const ctx = canvas.getContext('2d')

  //   const data = {
  //     labels: ['Confirmed', 'Active', 'Recovered', 'Death'],
  //     position: 'end',
  //     fontColor: 'rgb(253, 199, 192)',
  //     // textAlign:,

  //     datasets: [{

  //       // label: '# of Votes',
  //       data: myDa,
  //       backgroundColor: ['rgb(253, 199, 192)', 'rgb(192, 208, 253)', 'rgb(192, 253, 192)', 'rgba(219,219,219)'],
  //       borderColor: [],
  //       borderWidth: 2
  //     }],
  //   }
  //   var myChart = new Chart(this.canvasRef.nativeElement, {
  //     type: 'pie',
  //     data: data,
  //     options: {
  //       responsive: false,
  //       maintainAspectRatio: true,
  //       legend: {
  //         display: false,
  //         // position: '',
  //         labels: {
  //           fontColor: 'rgb(0,0,0)',
  //           fontSize: 15,
  //           fontStyle: 'bold',
  //         }
  //       },
  //       plugins: {
  //         // render: 'value',
  //         labels: {
  //           render: 'percentage',
  //           fontStyle: 'bold',
  //           fontSize:12,
  //         }
  //       }
  //     }

  //   });
  //   myChart.update();
  // }
  ionViewDidLoad() {
    setInterval(() => {

      this.casesslide.slideNext();
    }, 100);
  }


  //   drawchart(mydata) {
  //     console.log(mydata);
  //   // console.log(arr);
  //   // var data = new google.visualization.DataTable(null);

  //   // var options = {
  //   //   // width: 100,
  //   //   // height: "100%",
  //   //   title: 'Most Affected District in ',
  //   //   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  //   // }

  //   // data.addColumn('string', 'Element');
  //   // data.addColumn('number', 'Confirmed');
  //   // // data.addColumn('number', 'Active');
  //   // // data.addColumn('number', 'Recovered');
  //   // // data.addColumn('number', 'Death');
  //   // data.addRow(['India',100]);
  //   // data.addRow(['Canda', 200]);
  //   // data.addRow(['Australia', 300]);
  //   // // arr.forEach(dataStatics => {
  //   //   data.addRow([dataStatics[0], dataStatics[1], dataStatics[2], dataStatics[3], dataStatics[4]]);
  //   // })

  //   // data.addRows([
  //   //   ['India', 10, 11, 12,13 ],
  //   // ]);
  //   //   data.addRows([
  //   //     ['canada',15,12,12,34]
  //   //   ]);

  //   // let d = [['Germany', 500],
  //   // ['United States', 300],
  //   // ['Brazil', 400],
  //   // ['Canada', 500],
  //   // ['France', 600],
  //   // ['RU', 700],
  //   // ['India', 1000]
  //   // ]
  //   let d : any[]= mydata;
  //   var data = google.visualization.arrayToDataTable([

  //     ['Country', 'Confirmed'],
  //     // // ...mydata
  //     ...d
  //   ]);

  //   // var options = {};
  //   // var options = {
  //   //   region: 'IN',
  //   //   displayMode: 'markers',
  //   //   colorAxis: { colors: ['green', 'blue'] }
  //   // };
  //   var chart = new google.visualization.GeoChart(document.getElementById('piechart'));

  //   chart.draw(data, null);
  //   // var chart = new google.visualization.GeoChart(document.getElementById('piechart'));
  //   // chart.draw(data,null );
  // }

  

  ngOnDestroy() {
    console.log("called");
    this.canPie1.nativeElement.remove();
    this.canPie2.nativeElement.remove();
    // this.canBar.nativeElement.remove();
  }
}
