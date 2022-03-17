import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaragesalePage } from './garagesale.page';

const routes: Routes = [
  {
    path: '',
    component: GaragesalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaragesalePageRoutingModule {}
