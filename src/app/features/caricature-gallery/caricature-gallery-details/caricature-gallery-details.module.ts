import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaricatureGalleryDetailsRoutingModule } from './caricature-gallery-details-routing.module';
import { CaricatureGalleryDetailsComponent } from './caricature-gallery-details.component';


@NgModule({
  declarations: [
    CaricatureGalleryDetailsComponent
  ],
  imports: [
    CommonModule,
    CaricatureGalleryDetailsRoutingModule
  ]
})
export class CaricatureGalleryDetailsModule { }
