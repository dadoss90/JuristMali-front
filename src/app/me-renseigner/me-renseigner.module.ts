import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeRenseignerPageRoutingModule } from './me-renseigner-routing.module';

import { MeRenseignerPage } from './me-renseigner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeRenseignerPageRoutingModule
  ],
  declarations: [MeRenseignerPage]
})
export class MeRenseignerPageModule {}
