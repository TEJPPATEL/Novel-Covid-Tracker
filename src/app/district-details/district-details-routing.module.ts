import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictDetailsPage } from './district-details.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictDetailsPageRoutingModule {}
