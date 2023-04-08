import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { CaricatureGalleryComponent } from './components/caricature-gallery/caricature-gallery.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ArtistListComponent,
    CaricatureGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
