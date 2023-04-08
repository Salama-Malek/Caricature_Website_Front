import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { ArtistListComponent } from './artist-list/artist-list/artist-list.component';


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
