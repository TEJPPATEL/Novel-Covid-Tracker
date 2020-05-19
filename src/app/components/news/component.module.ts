import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news.component';
import { NgModule } from '@angular/core';
// import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
@NgModule({
    declarations:[NewsComponent],
    exports:[NewsComponent],
    imports: [IonicModule, CommonModule,NgxSpinnerModule]

})

export class ComponentModule{
    
}