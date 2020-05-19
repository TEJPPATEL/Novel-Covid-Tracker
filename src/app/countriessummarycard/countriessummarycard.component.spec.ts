import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountriessummarycardComponent } from './countriessummarycard.component';

describe('CountriessummarycardComponent', () => {
  let component: CountriessummarycardComponent;
  let fixture: ComponentFixture<CountriessummarycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriessummarycardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriessummarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
