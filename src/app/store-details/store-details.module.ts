import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreDetailsPageRoutingModule } from './store-details-routing.module';

import { StoreDetailsPage } from './store-details.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreDetailsPageRoutingModule,
    IonicHeaderParallaxModule
  ],
  declarations: [StoreDetailsPage]
})
export class StoreDetailsPageModule {}
