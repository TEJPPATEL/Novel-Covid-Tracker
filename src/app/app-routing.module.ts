import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
 
  {
    path: 'country-details/:country',
    loadChildren: () => import('./country-details/country-details.module').then( m => m.CountryDetailsPageModule)
  },
  {
    path: 'district-details/:state/:district',
    loadChildren: () => import('./district-details/district-details.module').then( m => m.DistrictDetailsPageModule)
  },
  {
    path: 'state-details/:state',
    loadChildren: () => import('./state-details/state-details.module').then( m => m.StateDetailsPageModule)
  },
  {
    path: 'country-statics',
    loadChildren: () => import('./country-statics/country-statics.module').then( m => m.CountryStaticsPageModule)
  },
  {
    path: 'world-statics',
    loadChildren: () => import('./world-statics/world-statics.module').then( m => m.WorldStaticsPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
