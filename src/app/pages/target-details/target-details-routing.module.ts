import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetDetailsPage } from './target-details.page';

const routes: Routes = [
  {
    path: '',
    component: TargetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TargetDetailsPageRoutingModule {}
