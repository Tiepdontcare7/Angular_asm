import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  API_URL = process.env['API_CART']

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
