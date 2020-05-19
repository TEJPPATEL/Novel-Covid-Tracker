import { NgxSpinnerService } from 'ngx-spinner';
import { CountrySummaryService } from './../countriessummarycard/country-summary.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { CountrySummary } from '../countriessummarycard/country.model';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit {

  country_name: string;
  countrySummaryData:any[];
  casesData : any[];
  @ViewChild('canPieCountry', { static: false }) private canPieCountry: ElementRef;
  @ViewChild('canBarCountry', { static: false }) private canBarCountry: ElementRef;
  constructor(private activeroute: ActivatedRoute, private coutryservice: CountrySummaryService,private spinner:NgxSpinnerService) { }
  maxDate ;

  

  ngOnInit() {
    this.spinner.show();
    // this.maxDate = this.getTodayDate('-')
    // console.log(this.getTodayDate('-'));
    this.activeroute.paramMap.subscribe(params => {
      this.country_name = params.get('country');
    })
    let CountryList:any[] = [];
    this.coutryservice.getCountriesSummaryData().subscribe(data => {
      console.log(data);
      data.map(countrylist => {
        if (countrylist.cases > 100000) {
          // CountryList.push(countrylist);
          console.log(countrylist);
        CountryList.push([countrylist.country,countrylist.cases,countrylist.active,countrylist.recovered,countrylist.deaths]);
         }
      })
     
      this.countrySummaryData = data.filter(d => d.country === this.country_name);
      console.log(this.countrySummaryData)
      this.casesData = [this.countrySummaryData.map(data=>data.cases),this.countrySummaryData.map(data=>data.active),this.countrySummaryData.map(data => data.recovered),this.countrySummaryData.map(data => data.deaths)]
    },error => {
      console.log("error");
    }, 
    ()=>{
      this.chart(this.casesData);
      this.barchart(CountryList);
      this.spinner.hide();
      // this.barchart(this.)
    })
    // summary

  }
  chart(myData) {
    // const ctx: HTMLCanvasElement = document.getElementById('PieChart').getContext('2d');
    // const ctx = canvas.getContext('2d')

    let confirmed = []
    myData.map(element => {
      confirmed.push(element[1]);
    });
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
    var myChart = new Chart(this.canPieCountry.nativeElement, {
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
    var myChart = new Chart(this.canBarCountry.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        title: {
          display: true,
          fontSize: 20,
          fontColor: "#ed576b",
          text: "Most Affected Countries"
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
//   onstartDate(event){
//   console.log(event)
// }
//   onendDate(event){
//     console.log(event.target.value.split("T")[0])
//   }
//   getTodayDate(sp) {
//     const today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth() + 1; //As January is 0.
//     var yyyy = today.getFullYear();
//     let newdd, newmm
//     newdd = dd < 10?  '0' + dd : dd;
//     newmm = mm < 10 ? '0' + mm : mm;
    
//     return (yyyy + sp + newmm + sp + newdd);
//   };

  ngOnDestroy() {
    console.log("called");
    this.canPieCountry.nativeElement.remove();
    this.canBarCountry.nativeElement.remove();
    // this.canBar.nativeElement.remove();
  }
}
