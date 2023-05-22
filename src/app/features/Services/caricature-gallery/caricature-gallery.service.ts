import { Injectable } from '@angular/core';
import { Caricature } from '../../../features/Interfaces/caricature'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaricatureGalleryService {

  private apiUrl = 'http://localhost:5000/caricatures'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCaricatures(): Observable<Caricature[]> {
    return this.http.get<Caricature[]>(this.apiUrl);
  }

  getCaricatureById(id: string): Observable<Caricature> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Caricature>(url);
  }
}
