import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/components/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./features/components/artist-list/artist-list.component').then((m) => m.ArtistListComponent),
  },
  {
    path: 'caricature-gallery',
    loadChildren: () =>
      import('./features/components/caricature-gallery/caricature-gallery.component').then(
        (m) => m.CaricatureGalleryComponent
      ),
  },
  {
    path: 'caricature-gallery-details',
    loadChildren: () =>
      import('./features/components/caricature-gallery-details/caricature-gallery-details.component').then(
        (m) => m.CaricatureGalleryDetailsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
