import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  API_URL = process.env['API_PRODUCTS']

  getAll(limit: any, page: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?_limit=${limit}&_page=${page}`);
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/` + id);
  }
  createP(product: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, product);
  }
  updateP(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/${id}`, product);
  }
  deleteP(id: any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/delete/` + id);
  }
}
