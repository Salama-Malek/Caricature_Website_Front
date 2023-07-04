import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caricature } from 'src/app/features/Interfaces/caricature';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CaricatureService {

    private baseUrl = 'http://localhost:5000/admin'; // Update the base URL

    constructor(private http: HttpClient, private AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this.AuthenticationService.getToken()}` };
  }

    headers = { "access-token": `${this.AuthenticationService.getToken()}` };
    requestOptions = { headers: this.headers };

    getCaricatures(): Observable<Caricature[]> {
        const url = `${this.baseUrl}/caricatures`; // Use the updated URL
        return this.http.get<Caricature[]>(url, this.requestOptions);
    }


    createCaricature(caricature: any): Observable<Caricature> {
        const url = `${this.baseUrl}/caricature`; // Use the updated URL
        const requestOptions = { headers: this.getHeaders() };
        return this.http.post<Caricature>(url, caricature, requestOptions);
      }
   


      getCaricatureById(id: string): Observable<Caricature> {
        const url = `${this.baseUrl}/caricature/${id}`;
        const requestOptions = { headers: this.getHeaders() };
        return this.http.get<Caricature>(url, requestOptions);
      }
    
     
    
      updateCaricature(id: string, caricature: Caricature): Observable<Caricature> {
        const url = `${this.baseUrl}/caricature/${id}`;
        const requestOptions = { headers: this.getHeaders() };
        return this.http.put<Caricature>(url, caricature, requestOptions);
      }

    
      deleteCaricature(id: string): Observable<void> {
        const url = `${this.baseUrl}/caricature/${id}`;
        const requestOptions = { headers: this.getHeaders() };
        return this.http.delete<void>(url, requestOptions);
      }
     
}








   

   
