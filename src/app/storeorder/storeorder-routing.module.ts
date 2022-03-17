import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreorderPage } from './storeorder.page';

const routes: Routes = [
  {
    path: '',
    component: StoreorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreorderPageRoutingModule {}
