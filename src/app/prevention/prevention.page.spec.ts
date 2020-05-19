import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreventionPage } from './prevention.page';

describe('PreventionPage', () => {
  let component: PreventionPage;
  let fixture: ComponentFixture<PreventionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
