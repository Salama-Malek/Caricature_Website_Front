import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists.component';

const routes: Routes = [{ path: '', component: ArtistsComponent }, { path: ':id', loadChildren: () => import('./artist-details/artist-details.module').then(m => m.ArtistDetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
