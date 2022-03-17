import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgarageproductPage } from './addgarageproduct.page';

const routes: Routes = [
  {
    path: '',
    component: AddgarageproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgarageproductPageRoutingModule {}
