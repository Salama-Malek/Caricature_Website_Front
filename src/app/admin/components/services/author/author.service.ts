import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Author } from 'src/app/features/Interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:5000/admin/Author';

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this._AuthenticationService.getToken()}` };
  }

  getAuthors(): Observable<Author[]> {
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Author[]>(this.apiUrl, requestOptions);
  }

  getAuthorById(id: string): Observable<Author> {
    const url = `${this.apiUrl}/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Author>(url, requestOptions);
  }

  createAuthor(Author: Author): Observable<Author> {
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.post<Author>(this.apiUrl, Author, requestOptions);
  }

  updateAuthor(id: string, Author: Author): Observable<Author> {
    const url = `${this.apiUrl}/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.put<Author>(url, Author, requestOptions);
  }

  deleteAuthor(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.delete<void>(url, requestOptions);
  }

}
