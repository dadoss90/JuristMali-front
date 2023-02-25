import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceAvocatPageRoutingModule } from './espace-avocat-routing.module';

import { EspaceAvocatPage } from './espace-avocat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceAvocatPageRoutingModule
  ],
  declarations: [EspaceAvocatPage]
})
export class EspaceAvocatPageModule {}
