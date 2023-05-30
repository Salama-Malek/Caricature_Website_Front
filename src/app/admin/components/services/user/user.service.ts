import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/features/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/admin/user/';

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  headers = { "access-token": `${this._AuthenticationService.getToken()}` };
  requestOptions = { headers: this.headers };


  getAllUsers(): Observable<User[]> {
    return this._HttpClient.get<User[]>(this.apiUrl, this.requestOptions)
  }

  updateUser(user_id: any): Observable<any> {
    return this._HttpClient.post(`${this.apiUrl}${user_id}`, this.requestOptions);
  }

  deleteUser(user_id: any): Observable<any> {
    return this._HttpClient.delete(`${this.apiUrl}${user_id}`, this.requestOptions);
  }

}
