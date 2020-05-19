import { DistrictModule } from './../districtsummarycard/district.module';
// import { MapModule } from '../../../node_modules/highcharts/modules/map';

import { StateModule } from './../statesummarycard/state.module';
import { CountriesModule } from './../countriessummarycard/countries.module';
import { ComponentModule } from './../components/news/component.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CountriesModule,
    StateModule,  
    DistrictModule,
    NgxSpinnerModule
    // MapModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
