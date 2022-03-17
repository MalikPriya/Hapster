import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaragelandingPage } from './garagelanding.page';

const routes: Routes = [
  {
    path: '',
    component: GaragelandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaragelandingPageRoutingModule {}
