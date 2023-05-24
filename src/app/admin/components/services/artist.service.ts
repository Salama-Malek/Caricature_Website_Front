import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  Artist :Artist[]=[];
  private apiUrl = 'http://localhost:5000/artist';
  constructor (private _HttpClient:HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this._HttpClient.get<Artist[]>(this.apiUrl);
  }

  getArtist(id: string): Observable<Artist> {
    const url = `${this.apiUrl}/${id}`;
    return this._HttpClient.get<Artist>(url);
  }

  // createArtist(artist: Artist): Observable<Artist> {
  //   return this.http.post<Artist>(this.apiUrl, artist);
  // }

  // updateArtist(id: string, artist: Artist): Observable<Artist> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<Artist>(url, artist);
  // }

  // deleteArtist(id: string): Observable<void> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<void>(url);
  // }

}
