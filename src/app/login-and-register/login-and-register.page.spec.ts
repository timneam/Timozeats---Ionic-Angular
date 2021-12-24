import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginAndRegisterPage } from './login-and-register.page';

describe('LoginAndRegisterPage', () => {
  let component: LoginAndRegisterPage;
  let fixture: ComponentFixture<LoginAndRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAndRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
