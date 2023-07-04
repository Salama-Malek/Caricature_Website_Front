import { Injectable } from '@angular/core';
import { Caricature } from '../../../features/Interfaces/caricature';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CaricatureGalleryService {
  constructor(private http: HttpClient, private _AuthService: AuthenticationService) { }

  headers = { "access-token": `${this._AuthService.getToken()}` };

  requestOptions = { headers: this.headers };

  private apiUrl = 'http://localhost:5000';


  getCaricatures(): Observable<Caricature[]> {
    return this.http.get<Caricature[]>(`${this.apiUrl}/caricatures`);
  }

  getCaricatureById(id: string): Observable<Caricature> {
    const url = `${this.apiUrl}/caricature/${id}`;
    return this.http.get<Caricature>(url);
  }

  changeUserFav(data: any, user_id: string, caricature_id: string): Observable<any> {
    console.log("id: " + user_id);
    console.log("car id: " + caricature_id);
    return this.http.post<any>(`${this.apiUrl}/caricature/${caricature_id}/userid/${user_id}`, data, this.requestOptions);
  }
}
