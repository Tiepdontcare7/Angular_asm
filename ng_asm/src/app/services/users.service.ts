import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:7000/auth'


  signUp(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, data);
  }
  signIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signin`, data);
  }

}
