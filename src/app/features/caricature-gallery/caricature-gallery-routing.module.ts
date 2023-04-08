import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaricatureGalleryComponent } from './caricature-gallery.component';

const routes: Routes = [{ path: '', component: CaricatureGalleryComponent }, { path: ':id', loadChildren: () => import('./caricature-gallery-details/caricature-gallery-details.module').then(m => m.CaricatureGalleryDetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaricatureGalleryRoutingModule { }
