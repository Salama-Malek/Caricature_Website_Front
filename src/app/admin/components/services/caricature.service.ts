import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caricature } from './../models/caricature.model';

@Injectable({
  providedIn: 'root'
})
export class CaricatureService {

  private caricaturesUrl = 'api/caricatures';

  constructor(private http: HttpClient) { }

  getCaricatures(): Observable<Caricature[]> {
    return this.http.get<Caricature[]>(this.caricaturesUrl);
  }

  getCaricature(id: number): Observable<Caricature> {
    const url = `${this.caricaturesUrl}/${id}`;
    return this.http.get<Caricature>(url);
  }

  addCaricature(caricature: Caricature): Observable<Caricature> {
    return this.http.post<Caricature>(this.caricaturesUrl, caricature);
  }

  updateCaricature(caricature: Caricature): Observable<any> {
    return this.http.put(this.caricaturesUrl, caricature);
  }

  deleteCaricature(id: number): Observable<Caricature> {
    const url = `${this.caricaturesUrl}/${id}`;
    return this.http.delete<Caricature>(url);
  }
}
