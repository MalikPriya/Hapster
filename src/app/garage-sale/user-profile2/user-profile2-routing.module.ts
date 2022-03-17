import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfile2Page } from './user-profile2.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfile2PageRoutingModule {}
