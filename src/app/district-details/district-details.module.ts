import { NgxSpinnerModule } from 'ngx-spinner';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictDetailsPageRoutingModule } from './district-details-routing.module';

import { DistrictDetailsPage } from './district-details.page';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictDetailsPageRoutingModule,
    GoogleChartsModule,
    HighchartsChartModule,
    NgxSpinnerModule
  ],
  declarations: [DistrictDetailsPage]
})
export class DistrictDetailsPageModule {}
