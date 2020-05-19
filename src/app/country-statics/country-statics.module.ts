import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryStaticsPageRoutingModule } from './country-statics-routing.module';

import { CountryStaticsPage } from './country-statics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryStaticsPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [CountryStaticsPage]
})
export class CountryStaticsPageModule {}
