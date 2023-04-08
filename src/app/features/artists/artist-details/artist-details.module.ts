import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailsRoutingModule } from './artist-details-routing.module';
import { ArtistDetailsComponent } from './artist-details.component';


@NgModule({
  declarations: [
    ArtistDetailsComponent
  ],
  imports: [
    CommonModule,
    ArtistDetailsRoutingModule
  ]
})
export class ArtistDetailsModule { }
