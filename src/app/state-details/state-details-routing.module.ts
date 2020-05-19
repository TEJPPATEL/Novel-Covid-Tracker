import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateDetailsPage } from './state-details.page';

const routes: Routes = [
  {
    path: '',
    component: StateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateDetailsPageRoutingModule {}
