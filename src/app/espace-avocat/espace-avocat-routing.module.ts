import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceAvocatPage } from './espace-avocat.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceAvocatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceAvocatPageRoutingModule {}
