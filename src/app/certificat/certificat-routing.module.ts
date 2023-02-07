import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificatPage } from './certificat.page';

const routes: Routes = [
  {
    path: '',
    component: CertificatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatPageRoutingModule {}
