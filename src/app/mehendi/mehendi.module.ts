import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MehendiPageRoutingModule } from './mehendi-routing.module';

import { MehendiPage } from './mehendi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MehendiPageRoutingModule
  ],
  declarations: [MehendiPage]
})
export class MehendiPageModule {}
