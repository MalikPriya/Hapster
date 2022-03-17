import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMobilePageRoutingModule } from './login-mobile-routing.module';

import { LoginMobilePage } from './login-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMobilePageRoutingModule
  ],
  declarations: [LoginMobilePage]
})
export class LoginMobilePageModule {}
