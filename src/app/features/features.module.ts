import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { CaricatureGalleryComponent } from './components/caricature-gallery/caricature-gallery.component';
import { CaricatureGalleryDetailsComponent } from './components/caricature-gallery-details/caricature-gallery-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtistDetailsComponent,
    ArtistListComponent,
    BlogComponent,
    CaricatureGalleryComponent,
    CaricatureGalleryDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ArtistDetailsComponent,
    ArtistListComponent,
    BlogComponent,
    CaricatureGalleryComponent,
    CaricatureGalleryDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class FeaturesModule {}
