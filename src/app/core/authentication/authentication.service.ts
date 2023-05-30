import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/features/Interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private _Router: Router) { }

  currentLogUser = new BehaviorSubject<User>({
    _id: "",
    name: "",
    email: "",
    password: "",
    image: "",
    is_admin: false
  });

  
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
    this.currentLogUser.next({
      _id: "",
      name: "",
      email: "",
      password: "",
      image: "",
      is_admin: false
    });
    localStorage.removeItem("token");
    this._Router.navigate(["/login"]);
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
