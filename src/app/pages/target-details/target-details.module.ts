import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetDetailsPageRoutingModule } from './target-details-routing.module';

import { TargetDetailsPage } from './target-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetDetailsPageRoutingModule
  ],
  declarations: [TargetDetailsPage]
})
export class TargetDetailsPageModule {}
