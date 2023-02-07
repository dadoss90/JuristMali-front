import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaixPage } from './paix.page';

const routes: Routes = [
  {
    path: '',
    component: PaixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaixPageRoutingModule {}
