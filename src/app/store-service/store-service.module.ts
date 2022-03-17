import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreServicePageRoutingModule } from './store-service-routing.module';

import { StoreServicePage } from './store-service.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreServicePageRoutingModule,
    IonicHeaderParallaxModule
  ],
  declarations: [StoreServicePage]
})
export class StoreServicePageModule {}
