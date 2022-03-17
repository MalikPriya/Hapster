import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BargainPageRoutingModule } from './bargain-routing.module';

import { BargainPage } from './bargain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BargainPageRoutingModule
  ],
  declarations: [BargainPage]
})
export class BargainPageModule {}
