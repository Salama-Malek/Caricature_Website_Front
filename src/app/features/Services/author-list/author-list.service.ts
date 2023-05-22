import { Injectable } from '@angular/core';
import { Author } from '../../../features/Interfaces/author';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorListService {

  private apiUrl = 'http://localhost:5000/authors'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthorById(id: string): Observable<Author> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Author>(url);
  }
}
