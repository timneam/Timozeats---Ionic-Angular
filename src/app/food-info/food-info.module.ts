import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeServiceService } from '../services/home-service.service';

import { IonicModule } from '@ionic/angular';

import { FoodInfoPageRoutingModule } from './food-info-routing.module';

import { FoodInfoPage } from './food-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FoodInfoPageRoutingModule
  ],
  declarations: [FoodInfoPage]
})
export class FoodInfoPageModule {}
