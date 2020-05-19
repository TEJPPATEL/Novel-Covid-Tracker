import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryStaticsPage } from './country-statics.page';

describe('CountryStaticsPage', () => {
  let component: CountryStaticsPage;
  let fixture: ComponentFixture<CountryStaticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStaticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryStaticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
