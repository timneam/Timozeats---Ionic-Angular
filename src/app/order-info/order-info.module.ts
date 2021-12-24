import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderInfoPageRoutingModule } from './order-info-routing.module';

import { OrderInfoPage } from './order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrderInfoPage]
})
export class OrderInfoPageModule {}
