import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfile2PageRoutingModule } from './user-profile2-routing.module';

import { UserProfile2Page } from './user-profile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfile2PageRoutingModule
  ],
  declarations: [UserProfile2Page]
})
export class UserProfile2PageModule {}
