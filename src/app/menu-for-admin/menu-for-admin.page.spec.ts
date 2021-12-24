import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuForAdminPage } from './menu-for-admin.page';

describe('MenuForAdminPage', () => {
  let component: MenuForAdminPage;
  let fixture: ComponentFixture<MenuForAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuForAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuForAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
