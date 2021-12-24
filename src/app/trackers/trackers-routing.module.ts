import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackersPage } from './trackers.page';

const routes: Routes = [
  {
    path: '',
    component: TrackersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackersPageRoutingModule {}
