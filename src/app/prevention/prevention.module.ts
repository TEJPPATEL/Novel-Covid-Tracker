import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventionPageRoutingModule } from './prevention-routing.module';

import { PreventionPage } from './prevention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventionPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [PreventionPage]
})
export class PreventionPageModule {}
