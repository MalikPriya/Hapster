import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MehendiPage } from './mehendi.page';

const routes: Routes = [
  {
    path: '',
    component: MehendiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MehendiPageRoutingModule {}
