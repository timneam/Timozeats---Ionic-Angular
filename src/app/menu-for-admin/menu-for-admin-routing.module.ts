import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuForAdminPage } from './menu-for-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuForAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuForAdminPageRoutingModule {}
