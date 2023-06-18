import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/features/Interfaces/author';
import { AuthorService } from '../services/author/author.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.css']
})
export class AuthorManagementComponent implements OnInit {

  authors: Author[] = [];

  editedAuthor: Author = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date,
    bio: '',
    favourite: false
  };

  constructor(private AuthorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.AuthorService.getAuthors().subscribe(
      (Authors: Author[]) => {
        this.authors = Authors;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadAuthorById(id: string): void {
    this.AuthorService.getAuthorById(id).subscribe(
      (Author: Author) => {
        console.log(Author);
        // Handle the fetched Author data as needed
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(Author: Author): void {
    this.editedAuthor = { ...Author }; // Create a copy of the Author to avoid modifying the original
  }

  cancelEditing(): void {
    this.editedAuthor = {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date,
      bio: '',
      favourite: false
    };
  }

  saveAuthorChanges(): void {
    if (this.editedAuthor) {
      this.AuthorService.updateAuthor(this.editedAuthor._id, this.editedAuthor).subscribe(
        (response: Author) => {
          console.log(response);
          this.editedAuthor = {
            _id: '',
            name: '',
            image: '',
            birthDate: new Date,
            bio: '',
            favourite: false
          };
          this.loadAuthors();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  deleteAuthor(Author: Author): void {
    this.AuthorService.deleteAuthor(Author._id).subscribe(
      () => {
        console.log(`Author with ID ${Author._id} deleted.`);
        this.loadAuthors();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
