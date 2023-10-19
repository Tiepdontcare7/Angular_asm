import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:7000/cart'

  getAllCart(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/`);
  }
  addToCard(product: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, product);
  }
  removeCartItem(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/delete`, data);
  }
}
