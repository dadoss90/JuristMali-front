import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaixPageRoutingModule } from './paix-routing.module';

import { PaixPage } from './paix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaixPageRoutingModule
  ],
  declarations: [PaixPage]
})
export class PaixPageModule {}
