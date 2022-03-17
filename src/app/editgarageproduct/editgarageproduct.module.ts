import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditgarageproductPageRoutingModule } from './editgarageproduct-routing.module';

import { EditgarageproductPage } from './editgarageproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditgarageproductPageRoutingModule
  ],
  declarations: [EditgarageproductPage]
})
export class EditgarageproductPageModule {}
