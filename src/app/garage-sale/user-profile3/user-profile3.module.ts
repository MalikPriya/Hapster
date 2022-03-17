import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfile3PageRoutingModule } from './user-profile3-routing.module';

import { UserProfile3Page } from './user-profile3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfile3PageRoutingModule
  ],
  declarations: [UserProfile3Page]
})
export class UserProfile3PageModule {}
