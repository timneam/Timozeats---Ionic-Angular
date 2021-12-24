import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuForAdminPageRoutingModule } from './menu-for-admin-routing.module';

import { MenuForAdminPage } from './menu-for-admin.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuForAdminPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MenuForAdminPage]
})
export class MenuForAdminPageModule {}
