import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditgarageproductPage } from './editgarageproduct.page';

const routes: Routes = [
  {
    path: '',
    component: EditgarageproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditgarageproductPageRoutingModule {}
