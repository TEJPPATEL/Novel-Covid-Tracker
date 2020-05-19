import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PieChartComponent } from './pie-chart.component'
import { NgModule } from "@angular/core";

@NgModule({
    imports:[IonicModule,RouterModule,CommonModule,FormsModule,HighchartsChartModule],
    exports:[PieChartComponent],
    declarations:[PieChartComponent]
})
export class PiechartModule{

}