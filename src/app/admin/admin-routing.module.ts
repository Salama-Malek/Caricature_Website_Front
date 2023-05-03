import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ArtistManagementComponent } from './components/artist-management/artist-management.component';
import { AuthorManagementComponent } from './components/author-management/author-management.component';
import { CharacterManagementComponent } from './components/character-management/character-management.component';
import { CaricatureManagementComponent } from './components/caricature-management/caricature-management.component';
import { CommentManagementComponent } from './components/comment-management/comment-management.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'admin-dashboard/users',
        component: UserManagementComponent,
      },
      {
        path: 'admin-dashboard/artists',
        component: ArtistManagementComponent,
      },
      {
        path: 'admin-dashboard/authors',
        component: AuthorManagementComponent,
      },
      {
        path: 'admin-dashboard/characters',
        component: CharacterManagementComponent,
      },
      {
        path: 'admin-dashboard/caricatures',
        component: CaricatureManagementComponent,
      },
      {
        path: 'admin-dashboard/comments',
        component: CommentManagementComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'admin-dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
