import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaricatureGalleryRoutingModule } from './caricature-gallery-routing.module';
import { CaricatureGalleryComponent } from './caricature-gallery.component';


@NgModule({
  declarations: [
    CaricatureGalleryComponent
  ],
  imports: [
    CommonModule,
    CaricatureGalleryRoutingModule
  ]
})
export class CaricatureGalleryModule { }
