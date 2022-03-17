import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragesalePageRoutingModule } from './garagesale-routing.module';

import { GaragesalePage } from './garagesale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragesalePageRoutingModule
  ],
  declarations: [GaragesalePage]
})
export class GaragesalePageModule {}
