import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charactert } from '../models/Character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://example.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Charactert[]> {
    return this.http.get<Charactert[]>(this.apiUrl);
  }

  getCharacter(id: number): Observable<Charactert> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Charactert>(url);
  }

  addCharacter(character: Charactert): Observable<Charactert> {
    return this.http.post<Charactert>(this.apiUrl, character);
  }

  updateCharacter(character: Charactert): Observable<Charactert> {
    const url = `${this.apiUrl}/${character.id}`;
    return this.http.put<Charactert>(url, character);
  }

  deleteCharacter(id: number): Observable<Charactert> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Charactert>(url);
  }
}
