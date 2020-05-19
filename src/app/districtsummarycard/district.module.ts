import { NgxSpinnerModule } from 'ngx-spinner';
import { DistrictsummarycardComponent } from './districtsummarycard.component';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponent } from './../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DistrictfilterPipe } from './districtfilter.pipe';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule, RouterModule,NgxSpinnerModule],
    exports: [DistrictsummarycardComponent],
    declarations: [DistrictsummarycardComponent, DistrictfilterPipe]
})

export class DistrictModule {

}