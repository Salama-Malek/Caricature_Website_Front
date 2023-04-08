import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaricatureGalleryDetailsComponent } from './caricature-gallery-details.component';

const routes: Routes = [{ path: '', component: CaricatureGalleryDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaricatureGalleryDetailsRoutingModule { }
