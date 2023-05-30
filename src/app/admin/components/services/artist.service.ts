import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from 'src/app/features/Interfaces/artists';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  Artist: Artist[] = [];
  private apiUrl = 'http://localhost:5000/artist';


  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  headers = { "access-token": `${this._AuthenticationService.getToken()}` };
  requestOptions = { headers: this.headers };

  getArtists(): Observable<Artist[]> {
    return this._HttpClient.get<Artist[]>(this.apiUrl);
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this._HttpClient.post<Artist>(this.apiUrl, artist, this.requestOptions);
  }

  updateArtist(id: string, artist: Artist): Observable<Artist> {
    const url = `${this.apiUrl}/${id}`;
    return this._HttpClient.put<Artist>(url, artist, this.requestOptions);
  }

  deleteArtist(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._HttpClient.delete<void>(url, this.requestOptions);
  }

}
