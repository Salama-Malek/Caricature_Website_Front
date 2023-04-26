import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((response) => {
          const token = response.token;
          if (token) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ email, token })
            );
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = currentUserString
      ? JSON.parse(currentUserString)
      : null;

    return !!currentUser;
  }

  register(formData: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
  getToken(): string {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = currentUserString
      ? JSON.parse(currentUserString)
      : null;
    return currentUser?.token;
  }
}
