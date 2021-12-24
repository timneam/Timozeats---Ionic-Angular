import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAndRegisterPage } from './login-and-register.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAndRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAndRegisterPageRoutingModule {}
