import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BargainPage } from './bargain.page';

const routes: Routes = [
  {
    path: '',
    component: BargainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BargainPageRoutingModule {}
