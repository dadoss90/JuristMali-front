import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeRenseignerPage } from './me-renseigner.page';

const routes: Routes = [
  {
    path: '',
    component: MeRenseignerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeRenseignerPageRoutingModule {}
