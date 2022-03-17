import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreorderPageRoutingModule } from './storeorder-routing.module';

import { StoreorderPage } from './storeorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreorderPageRoutingModule
  ],
  declarations: [StoreorderPage]
})
export class StoreorderPageModule {}
