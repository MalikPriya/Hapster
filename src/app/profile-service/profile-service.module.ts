import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileServicePageRoutingModule } from './profile-service-routing.module';

import { ProfileServicePage } from './profile-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileServicePageRoutingModule
  ],
  declarations: [ProfileServicePage]
})
export class ProfileServicePageModule {}
