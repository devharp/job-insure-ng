import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const registrationUrl = `${this.baseUrl}/user-registration`; 
    return this.http.post(registrationUrl, userData);
  }
  login(username: string, password: string): Observable<any> {
    const credentials = { username , password };
    return this.http.post(`${this.baseUrl}/user-login`, credentials);
  }
}
