import { NgxSpinnerModule } from 'ngx-spinner';
import { PiechartModule } from './../pie-chart/piechart.module';
import { ComponentModule } from './../components/news/component.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CountriesModule } from '../countriessummarycard/countries.module';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
