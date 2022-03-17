import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragedetailsPageRoutingModule } from './garagedetails-routing.module';

import { GaragedetailsPage } from './garagedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragedetailsPageRoutingModule
  ],
  declarations: [GaragedetailsPage]
})
export class GaragedetailsPageModule {}
