import { NgxSpinnerService } from 'ngx-spinner';
import { Summary } from './summary.model';
import { Tab1Service } from './tab1.service';
import { Component, ViewChild, Renderer2 } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Chart } from 'chart.js';

// import * as Highcharts from 'highcharts';
import  { Map } from '@highcharts/map-collection'
import * as Highcharts from '@highcharts/map-collection'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  headerName = "Tab1"
  @ViewChild('casesslide',{static:true}) casesslide: IonSlides;
  constructor(private tab1service:Tab1Service,private route:Router,private spinner:NgxSpinnerService) {}
  slideOpts;
  confirmedCases: number;
  activeCases: number;
  recoverCases: number;
  deathCases: number;
  pieChartData;
  @ViewChild('chartvc',{static:true}) chartvc;
  whichPage = "State";
 
  onClicking()
  {
    alert("hello");
  }
  ngOnInit(){

    this.spinner.show();

    // function initMap() { alert("ok"); }
    
    // let chartConfig = {
    //   shapes: [
    //     {
    //       type: 'zingchart.maps',
    //       options: {
    //         bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
    //         ignore: ['IND'], // ignore India because we are rendering a more specific India map below
    //         name: 'world.countries',
    //         panning: false, // turn of zooming. Doesn't work with bounding box
    //         style: {
    //           tooltip: {
    //             borderColor: '#000',
    //             borderWidth: '2px',
    //             fontSize: '18px'
    //           },
    //           controls: {
    //             visible: false // turn of zooming. Doesn't work with bounding box
    //           },
    //           hoverState: {
    //             alpha: .28
    //           }
    //         },
    //         zooming: false // turn of zooming. Doesn't work with bounding box
    //       }
    //     },
    //     {
    //       type: 'zingchart.maps',
    //       options: {
    //         name: 'ind',
    //         panning: false, // turn of zooming. Doesn't work with bounding box
    //         zooming: false,
    //         scrolling: false,
    //         style: {
    //           tooltip: {
    //             borderColor: '#000',
    //             borderWidth: '2px',
    //             fontSize: '18px'
    //           },
    //           borderColor: '#000',
    //           borderWidth: '2px',
    //           controls: {
    //             visible: false, // turn of zooming. Doesn't work with bounding box

    //           },
    //           hoverState: {
    //             alpha: .28
    //           },
    //           items: {
    //             KA: {
    //               tooltip: {
    //                 text: 'Karnataka has 2,851 monthly users total',
    //                 backgroundColor: '#ff5722'
    //               },
    //               backgroundColor: '#ff5722',
    //               label: {
    //                 visible: true
    //               }
    //             },
    //             MH: {
    //               tooltip: {
    //                 text: 'Maharashtra has 2,683 monthly users total',
    //                 backgroundColor: '#ff9800'
    //               },
    //               backgroundColor: '#ff9800',
    //               label: {
    //                 visible: true
    //               }
    //             },
    //             TL: {
    //               tooltip: {
    //                 text: 'Telangana has 1,494 monthly users total',
    //                 backgroundColor: '#00AE4D'
    //               },
    //               backgroundColor: '#00AE4D',
    //               label: {
    //                 visible: true
    //               }
    //             },
    //             TN: {
    //               tooltip: {
    //                 text: 'Tamil Nadu has 1,968 monthly users total',
    //                 backgroundColor: '#00bcd4'
    //               },
    //               backgroundColor: '#00bcd4',
    //               label: {
    //                 visible: true
    //               }
    //             }
    //           },
    //           label: { // text displaying. Like valueBox
    //             fontSize: '15px',
    //             visible: false
    //           }
    //         },
    //       //  zooming:true // turn of zooming. Doesn't work with bounding box
    //       }
    //     }
    //   ]
    // }

    
    // // zingchart.loadModules('maps,maps-ind,maps-world-countries');
    // zingchart.render({
    //   id: 'myChart',
    //   data: chartConfig,
    //   height: '100%',
    //   width: '100%',
    // });
  //   var data = [
  //     ['in-py', 0],
  //     ['in-ld', 1],
  //     ['in-wb', 2],
  //     ['in-or', 3],
  //     ['in-br', 4],
  //     ['in-sk', 5],
  //     ['in-ct', 6],
  //     ['in-tn', 7],
  //     ['in-mp', 8],
  //     ['in-2984', 9],
  //     ['in-ga', 10],
  //     ['in-nl', 11],
  //     ['in-mn', 12],
  //     ['in-ar', 13],
  //     ['in-mz', 14],
  //     ['in-tr', 15],
  //     ['in-3464', 16],
  //     ['in-dl', 17],
  //     ['in-hr', 18],
  //     ['in-ch', 19],
  //     ['in-hp', 20],
  //     ['in-jk', 21],
  //     ['in-kl', 22],
  //     ['in-ka', 23],
  //     ['in-dn', 24],
  //     ['in-mh', 25],
  //     ['in-as', 26],
  //     ['in-ap', 27],
  //     ['in-ml', 28],
  //     ['in-pb', 29],
  //     ['in-rj', 30],
  //     ['in-up', 31],
  //     ['in-ut', 32],
  //     ['in-jh', 33]
  //   ];
  //   // Highcharts.mapChart()
    
  //   // Create the chart
  //  var Chart = new Highcharts.mapChart(document.getElementById('container'), {
  //     chart: {
  //       map: 'countries/in/in-all'
  //     },

  //     title: {
  //       text: 'Highmaps basic demo'
  //     },

  //     subtitle: {
  //       text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/in-all.js">India</a>'
  //     },

  //     mapNavigation: {
  //       enabled: true,
  //       buttonOptions: {
  //         verticalAlign: 'bottom'
  //       }
  //     },

  //     colorAxis: {
  //       min: 0
  //     },

  //     series: [{
  //       data: data,
  //       name: 'Random data',
  //       states: {
  //         hover: {
  //           color: '#BADA55'
  //         }
  //       },
  //       dataLabels: {
  //         enabled: true,
  //         format: '{point.name}'
  //       }
  //     }]
  //   });




  //   const country: string = 'Gujarat';
  //   let countryData : [];
  //   this.tab1service.getStateAndDistrictWise().subscribe(res => {console.log(res[country]);
  //     if(res[country] === country)
  //     {
  
  //       return ; 
  //     }

  //   });
  
    


    // console.log(this.chartvc);
    this.pieChartData =[10,20,30];

    let month = new Date().getMonth() + 1;
    let formatedmonth = month<10? "0"+month : month;
    let date = new Date().getDate();
    let formateddate = month < 10 ? "0" + Number(date-2) : date-2;
    let foramtedDate:string = new Date().getFullYear() + "-" + formatedmonth + "-" + formateddate;
    console.log(foramtedDate);
    
    this.tab1service.getCasesSummary().subscribe(res =>{
      console.log(res);

      this.confirmedCases = res.confirmed
      this.activeCases = res.confirmed - res.recovered - res.deaths;
      this.deathCases = res.deaths
      this.recoverCases = res.recovered
    this.spinner.hide();

      // const canvas:any = document.getElementById('myChart');
      // const ctx = canvas.getContext('2d')
      // console.log(this.confirmedCases)
      // var myChart = new Chart(ctx, {
      //   type: 'pie',
      //   data: {
      //     labels: ['Red', 'Blue', 'Yellow', 'Green'],
      //     datasets: [{
      //       label: '# of Votes',
      //       data: [this.confirmedCases, this.deathCases, this.activeCases, this.recoverCases],
      //       backgroundColor: ['rgb(192, 253, 192)', 'rgb(253, 199, 192)', 'rgb(192, 208, 253)','rgb(253, 237, 192)'],
      //       borderColor: ['rgb(192, 253, 192)', 'rgb(253, 199, 192)', 'rgb(192, 208, 253)', 'rgb(253, 237, 192)'],
      //       borderWidth: 2
      //     }],
          
      //   },
      //   options: {
      //     tooltips: { enabled: true, mode: 'nearest'},
      //     title:{
      //       display:true,
      //       position:'top',
      //       text:'corona',
      //     },

      //   }
      // });
  })



    // let len;
    // this.casesslide.length().then(data => {
    //   len = data;
    // })

    // this.slideOpts = {
    //   initialSlide: 0,
    //   speed: 400,
    
    // };
    this.casesslide.startAutoplay();
    // this.casesslide

    setInterval(()=>{
      this.casesslide.startAutoplay();
    },500)
    // setInterval(()=>{})
    // setInterval(async ()=>{
    //   if (await this.casesslide.getActiveIndex() === await this.casesslide.length() - 1){
    //     this.casesslide.startAutoplay();
    //   }
    //   this.casesslide.slideNext();  
    // },3000)
    
      console.log("hii");
  
  }
  // ionViewDidLoad(){
  //   setInterval(() => {
    
  // this.casesslide.slideNext();  
  // },100);
  // }

  segmentChanged(event){
    switch (event.detail.value){
      case "State":
        this.whichPage = "State";
        console.log("state");
        break
      case "District":
        this.whichPage = "District";
        // this.route.navigate('')
        // this.route.navigate(['/tabs','tab2'])
        console.log("District s");
        break
      case "Worldwide":
        this.whichPage = "Worldwide"
        console.log("Worldwide s");
        break
      // default :
      // this.whichPage = "State"
      // break;

    }
    // console.log(event.detail.value);
  }

}