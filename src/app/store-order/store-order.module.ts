import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreOrderPageRoutingModule } from './store-order-routing.module';

import { StoreOrderPage } from './store-order.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreOrderPageRoutingModule,
    IonicHeaderParallaxModule
  ],
  declarations: [StoreOrderPage]
})
export class StoreOrderPageModule {}
