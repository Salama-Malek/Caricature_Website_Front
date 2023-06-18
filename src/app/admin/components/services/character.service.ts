import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/features/Interfaces/character'; 
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
    private apiUrl = 'http://localhost:5000/admin/Character';

    constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }
  
    getHeaders(): { [header: string]: string } {
      return { "access-token": `${this._AuthenticationService.getToken()}` };
    }
  
    getCharacters(): Observable<Character[]> {
      const requestOptions = { headers: this.getHeaders() };
      return this._HttpClient.get<Character[]>(this.apiUrl, requestOptions);
    }
  
    getCharacterById(id: string): Observable<Character> {
      const url = `${this.apiUrl}/${id}`;
      const requestOptions = { headers: this.getHeaders() };
      return this._HttpClient.get<Character>(url, requestOptions);
    }
  
    createCharacter(Character: Character): Observable<Character> {
      const requestOptions = { headers: this.getHeaders() };
      return this._HttpClient.post<Character>(this.apiUrl, Character, requestOptions);
    }
  
    updateCharacter(id: string, Character: Character): Observable<Character> {
      const url = `${this.apiUrl}/${id}`;
      const requestOptions = { headers: this.getHeaders() };
      return this._HttpClient.put<Character>(url, Character, requestOptions);
    }
  
    deleteCharacter(id: string): Observable<void> {
      const url = `${this.apiUrl}/${id}`;
      const requestOptions = { headers: this.getHeaders() };
      return this._HttpClient.delete<void>(url, requestOptions);
    }
}
