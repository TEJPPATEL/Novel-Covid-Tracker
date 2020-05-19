import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldStaticsPage } from './world-statics.page';

const routes: Routes = [
  {
    path: '',
    component: WorldStaticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldStaticsPageRoutingModule {}
