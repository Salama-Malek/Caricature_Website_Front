import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Caricature } from '../../Interfaces/caricature';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private _Http: HttpClient, private _AuthService: AuthenticationService) { }


  headers = { "access-token": `${this._AuthService.getToken()}` };
  requestOptions = { headers: this.headers };
  private apiUrl = 'http://localhost:5000';


  getCaricatures(user_id: string): Observable<Caricature[]> {
    return this._Http.get<Caricature[]>(`${this.apiUrl}/profile/${user_id}`);
  }
}
