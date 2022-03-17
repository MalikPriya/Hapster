import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgarageproductPageRoutingModule } from './addgarageproduct-routing.module';

import { AddgarageproductPage } from './addgarageproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgarageproductPageRoutingModule
  ],
  declarations: [AddgarageproductPage]
})
export class AddgarageproductPageModule {}
