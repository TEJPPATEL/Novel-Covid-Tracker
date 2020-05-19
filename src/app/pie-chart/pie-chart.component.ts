import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
// import Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  @ViewChild('canvasRef', { static: false }) canvasRef;
  constructor() { }
  // Highcharts = Highcharts;
  chartOptions;
  ngOnInit() {
   this.chartOptions = {
      series: [{
        type:'pie',
        data: [1, 2, 3]
      }]
    };
   
    // let d = [1, 2, 3, 5];
    // this.chart(d);
  }
  // ngAfterViewInit(){
  //   let d = [1, 2, 3, 5];
  //   this.chart(d);
  // }
  // chart(myDa) {
  //   // const ctx:HTMLCanvasElement = document.getElementById('myChart').getContext('2d');
  //   // const ctx = canvas.getContext('2d')

  //   const data = {
  //     labels: ['Confirmed', 'Active', 'Recovered', 'Death'],
  //     position: 'bottom',
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
  //         display: true,
  //         position: 'bottom',
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
  //           fontSize: 15,
  //         }
  //       }
  //     }

  //   });

  // }
}
