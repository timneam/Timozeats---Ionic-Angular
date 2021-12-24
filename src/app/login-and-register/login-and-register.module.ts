import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAndRegisterPageRoutingModule } from './login-and-register-routing.module';

import { LoginAndRegisterPage } from './login-and-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAndRegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginAndRegisterPage]
})
export class LoginAndRegisterPageModule {}
