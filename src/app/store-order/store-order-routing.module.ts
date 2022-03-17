import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreOrderPage } from './store-order.page';

const routes: Routes = [
  {
    path: '',
    component: StoreOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreOrderPageRoutingModule {}
