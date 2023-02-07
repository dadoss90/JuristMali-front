import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificatPageRoutingModule } from './certificat-routing.module';

import { CertificatPage } from './certificat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificatPageRoutingModule
  ],
  declarations: [CertificatPage]
})
export class CertificatPageModule {}
