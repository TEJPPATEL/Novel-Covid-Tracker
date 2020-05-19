import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldStaticsPageRoutingModule } from './world-statics-routing.module';

import { WorldStaticsPage } from './world-statics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldStaticsPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [WorldStaticsPage]
})
export class WorldStaticsPageModule {}
