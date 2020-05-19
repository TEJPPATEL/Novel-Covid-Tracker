import { NgxSpinnerService } from 'ngx-spinner';
import { StatewiseService } from './../statesummarycard/statewise.service';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators'
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { DistrictwiseService } from '../districtsummarycard/districtwise.service';
// import Highcharts from 'highcharts';
import * as $ from 'jquery'
import { GoogleChartComponent } from 'angular-google-charts';


@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.page.html',
  styleUrls: ['./district-details.page.scss'],
})
export class DistrictDetailsPage implements OnInit {
  @ViewChild('canPie', { static: false }) private canPie: ElementRef;
  @ViewChild('canBar', { static: false }) private canBar: ElementRef;

  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'pie'
  //   }]
  // }

  
//  drawChart() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Element');
//   data.addColumn('number', 'Percentage');
//   data.addRows([
//     ['Nitrogen', 0.78],
//     ['Oxygen', 0.21],
//     ['Other', 0.01]
//   ]);
 

//   // Instantiate and draw the chart.
//    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   // chart.draw(data, null);
// }
  

  loadGoogleChart() {
   
    // google.charts.load('current', { 'packages': ['corechart'] });
    // google.charts.setOnLoadCallback(() => this.drawChart);

  }
  checkloaded(): boolean {
    return !((typeof google === 'undefined') || (typeof google.visualization === 'undefined'));
  }



 

  district_name = "";
  state_name ;
  myData2=[];
  myOptions = {
    colors: ['#ff440e', '#ff693e', '#ff8f6e', '#ffb49f', '#ffc7b6'],
    is3D: true,

  };
  myData = []
  
  constructor(private activeroute : ActivatedRoute,private stateservice:StatewiseService,private districtservice:DistrictwiseService,private spinner:NgxSpinnerService) { }
  maxDate : string;
  getGoogle() {
    return google;
  }
  conf = 1;
  det =2;
  
  
  // @ViewChild('gchart',{static:false}) gchart:GoogleChartComponent;
  // @HostListener('window:resize', ['$event'])
  // onWindowResize(event: any) {
  //   let selection = 
   
  //   // you can remove two lines that preserve selection if you don't need them
  // }
  ngOnInit() {
  this.spinner.show();
    
    console.log(this.getGoogle());
    // this.loadGoogleChart();
    let confirmedCases;
   
  google.charts.load('current', { 'packages': ['corechart'] });
 




    // Instantiate and draw the chart.
   

// this.drawChart();

    // this.drawChart();
    this.maxDate = this.getTodayDate('-')
    // console.log(this.myData)

    this.activeroute.paramMap.subscribe(param =>{
      this.district_name = param.get('district'); 
      this.state_name = param.get('state');
      
      // console.log(this.district_name);
      // console.log(this.state_name);

      
    });
  //  this.activeroute.queryParams.subscribe(params =>{
  //   this.district_name  = params ['district'];
    
  // });

    this.stateservice.getStateDistrictWise().subscribe(data => {
      if(JSON.stringify(data).includes(this.state_name))
      { 
        console.log(this.district_name);
               // data[district].state
        let result = data[this.state_name].districtData[this.district_name];
        // console.log(result)
        this.myData = [result.confirmed, result.active, result.recovered, result.deceased];
        // this.drawChart([result.confirmed, result.active, result.recovered, result.deceased])
        // this.chart(this.myData);
        // // console.log(data[this.state_name].districtData);

        // console.log("district");
      }
      
    }, error => { console.log("error"); this.spinner.show();},()=>{
      this.chart(this.myData);
      this.spinner.hide();
    });

    this.districtservice.getStateDistrictWise().subscribe(data =>{
    let dataObj = data[this.state_name].districtData;
    // console.log(typeof( dataObj));
      for(let [key] of Object.entries(dataObj)){
        // console.log(key,dataObj[key].confirmed);
        if(dataObj[key].confirmed > 100){
        this.myData2.push([key, dataObj[key].confirmed, dataObj[key].active, dataObj[key].recovered, dataObj[key].deceased])
        }
      }
      
    }, err => { this.spinner.show();}, () => {
     
      this.chart2(this.myData2);
      this.spinner.hide();
      // google.charts.setOnLoadCallback(() => { this.drawchart(this.myData2) });
    });
   
   
  }
 

  // componentDidMount() {
  //   this.chart(this.myData)
  // }
  chart(myData) {
    // const ctx:HTMLCanvasElement = document.getElementById('PieChart').getContext('2d');
    // const ctx = canvas.getContext('2d')

    let confirmed = []
     myData.map(element => {
     confirmed.push(element[1]);
    });
    const data = {
      labels: ['Confirmed', 'Active', 'Recovered', 'Death'],
      position:'bottom',
      fontColor: 'rgb(253, 199, 192)',
      // textAlign:,
    
      datasets: [
      {
        // label: '# of Votes',
        data: myData,
        backgroundColor: ['rgb(255, 150, 150)', 'rgb(192, 208, 253)', 'rgb(192, 253, 192)','rgba(219,219,219)'],
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
    var myChart = new Chart(this.canPie.nativeElement, {
      type: 'doughnut',
      data: data,
      options:{
        responsive:false,
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
        plugins:{
          // render: 'value',
          labels: {
            render: 'percentage',
            fontStyle: 'bold',
            fontSize:15,
          }
        }
      }

    });
    myChart.update();
  }
  chart2(chartData) {
    // const ctx: HTMLCanvasElement = document.getElementById('BarChart').getContext('2d');
    // const ctx = canvas.getContext('2d')

    let confirmed = []
    let active = []
    let recovered = []
    let death = []
    let labels = []
    chartData.map(element => {
      labels.push(element[0]);
      confirmed.push(element[1]);
      active.push(element[2])
      recovered.push(element[3]);
      death.push(element[4])
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
          data:active
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
    var myChart = new Chart(this.canBar.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        title:{
          display:true,
          fontSize:20,
          fontColor:"#ed576b",
          text:"Most Affected Districts" },
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


  ngOnDestroy(){
    console.log("called");
    this.canPie.nativeElement.remove();
    this.canBar.nativeElement.remove();
  }
  
  getTodayDate(sp) {
    const today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();
    let newdd, newmm
    newdd = dd < 10 ? '0' + dd : dd;
    newmm = mm < 10 ? '0' + mm : mm;

    return (yyyy + sp + newmm + sp + newdd);
  };
  onstartDate(event) {
    console.log(event)
  }
  onendDate(event) {
    console.log(event.target.value.split("T")[0])
  }

    
  
  drawchart(arr:any[]) {
  console.log(arr);
  var data = new google.visualization.DataTable(null);

    var options = {
      // width: 100,
      // height: "100%",
      title: 'Most Affected District in ',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
    }

  data.addColumn('string', 'Element');
  data.addColumn('number', 'Confirmed');
    data.addColumn('number', 'Active');
    data.addColumn('number', 'Recovered');
    data.addColumn('number', 'Death');
   arr.forEach(dataStatics => {
     data.addRow([dataStatics[0],dataStatics[1],dataStatics[2],dataStatics[3],dataStatics[4]]);
   })
  // data.addRows([
  //   ['India', 10, 11, 12,13 ],
  // ]);
  //   data.addRows([
  //     ['canada',15,12,12,34]
  //   ]);
  var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

}
