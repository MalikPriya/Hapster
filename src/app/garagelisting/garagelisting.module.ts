import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragelistingPageRoutingModule } from './garagelisting-routing.module';

import { GaragelistingPage } from './garagelisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragelistingPageRoutingModule
  ],
  declarations: [GaragelistingPage]
})
export class GaragelistingPageModule {}
