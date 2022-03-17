import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaragedetailsPage } from './garagedetails.page';

const routes: Routes = [
  {
    path: '',
    component: GaragedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaragedetailsPageRoutingModule {}
