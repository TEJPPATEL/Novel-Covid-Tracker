import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventionPage } from './prevention.page';

const routes: Routes = [
  {
    path: '',
    component: PreventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventionPageRoutingModule {}
