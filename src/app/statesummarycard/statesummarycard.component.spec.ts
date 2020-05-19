import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatesummarycardComponent } from './statesummarycard.component';

describe('StatesummarycardComponent', () => {
  let component: StatesummarycardComponent;
  let fixture: ComponentFixture<StatesummarycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesummarycardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatesummarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
