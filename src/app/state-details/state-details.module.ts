import { HighchartsChartModule } from 'highcharts-angular';

import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateDetailsPageRoutingModule } from './state-details-routing.module';

import { StateDetailsPage } from './state-details.page';
import { DistrictModule } from '../districtsummarycard/district.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictModule,
    StateDetailsPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [StateDetailsPage]
})
export class StateDetailsPageModule {}
