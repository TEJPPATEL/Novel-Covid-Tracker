import { RouterModule } from '@angular/router';
import { ExploreContainerComponent } from './../explore-container/explore-container.component';
import { StatesummarycardComponent } from './statesummarycard.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { StatefilterPipe } from './statefilter.pipe';
import { DistrictModule } from '../districtsummarycard/district.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule,RouterModule, DistrictModule, NgxSpinnerModule],
    exports:[StatesummarycardComponent],
    declarations:[StatesummarycardComponent, StatefilterPipe]
})

export class StateModule{

}