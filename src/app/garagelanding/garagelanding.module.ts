import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragelandingPageRoutingModule } from './garagelanding-routing.module';

import { GaragelandingPage } from './garagelanding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragelandingPageRoutingModule
  ],
  declarations: [GaragelandingPage]
})
export class GaragelandingPageModule {}
