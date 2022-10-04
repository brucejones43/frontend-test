import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = `${environment.baseUrl}/auth`;
  loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const payload = {email:email, password:password};
    return this.http.post<any>(`${this.authUrl}/login`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  logout(): void{
    this.http.post(`${this.authUrl}/logout`, null, {headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(
      () => {
        console.log("LOGGED OUT");
      }
    );
  }

  register(firstName: string, lastName: string, email: string, password: string, street_address: string, apt: string, city:string, state:string, zipcode:number): Observable<any> {
    const payload = {firstName: firstName, lastName: lastName, email: email, password: password, street_address: street_address, apt:apt, city:city, state:state, zipcode:zipcode};
    return this.http.post<any>(`${this.authUrl}/register`, payload, {headers: environment.headers});
  }
}
