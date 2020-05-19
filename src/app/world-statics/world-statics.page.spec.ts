import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorldStaticsPage } from './world-statics.page';

describe('WorldStaticsPage', () => {
  let component: WorldStaticsPage;
  let fixture: ComponentFixture<WorldStaticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldStaticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorldStaticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
