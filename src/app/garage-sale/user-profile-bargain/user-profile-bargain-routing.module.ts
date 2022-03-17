import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileBargainPage } from './user-profile-bargain.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileBargainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileBargainPageRoutingModule {}
