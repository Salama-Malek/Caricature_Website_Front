import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ArtistManagementComponent } from './components/artist-management/artist-management.component';
import { AuthorManagementComponent } from './components/author-management/author-management.component';
import { CharacterManagementComponent } from './components/character-management/character-management.component';
import { CaricatureManagementComponent } from './components/caricature-management/caricature-management.component';
import { CommentManagementComponent } from './components/comment-management/comment-management.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    ArtistManagementComponent,
    AuthorManagementComponent,
    CharacterManagementComponent,
    CommentManagementComponent,

  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule, AppRoutingModule ,HttpClientModule],
  exports: [
    AdminDashboardComponent,
    UserManagementComponent,
    ArtistManagementComponent,
    AuthorManagementComponent,
    CharacterManagementComponent,
    CommentManagementComponent,
  ],
})
export class AdminModule {}
