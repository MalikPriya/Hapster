import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaragelistingPage } from './garagelisting.page';

const routes: Routes = [
  {
    path: '',
    component: GaragelistingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaragelistingPageRoutingModule {}
