import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfile3Page } from './user-profile3.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfile3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfile3PageRoutingModule {}
