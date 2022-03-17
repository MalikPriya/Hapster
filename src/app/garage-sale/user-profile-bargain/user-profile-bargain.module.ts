import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileBargainPageRoutingModule } from './user-profile-bargain-routing.module';

import { UserProfileBargainPage } from './user-profile-bargain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileBargainPageRoutingModule
  ],
  declarations: [UserProfileBargainPage]
})
export class UserProfileBargainPageModule {}
