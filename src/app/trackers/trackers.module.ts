import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackersPageRoutingModule } from './trackers-routing.module';

import { TrackersPage } from './trackers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackersPageRoutingModule
  ],
  declarations: [TrackersPage]
})
export class TrackersPageModule {}
