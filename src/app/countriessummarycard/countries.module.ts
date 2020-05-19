import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountriessummarycardComponent } from './countriessummarycard.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CountryfilterPipe } from './countryfilter.pipe';
import { GoogleChartsModule } from 'angular-google-charts';
import { FusionChartsModule } from 'angular-fusioncharts';


import{ AmexioMapModule,AmexioWidgetModule} from 'amexio-ng-extensions';
@NgModule({
    declarations: [CountriessummarycardComponent, CountryfilterPipe],
    exports: [CountriessummarycardComponent],
    imports: [IonicModule, CommonModule, FormsModule, RouterModule,NgxSpinnerModule]

})

export class CountriesModule {

}