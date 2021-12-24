import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackersPage } from './trackers.page';

describe('TrackersPage', () => {
  let component: TrackersPage;
  let fixture: ComponentFixture<TrackersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
