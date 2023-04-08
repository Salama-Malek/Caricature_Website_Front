import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) }, { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) }, { path: 'artists', loadChildren: () => import('./features/artists/artists.module').then(m => m.ArtistsModule) }, { path: 'caricature-gallery', loadChildren: () => import('./features/caricature-gallery/caricature-gallery.module').then(m => m.CaricatureGalleryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
