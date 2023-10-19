import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:7000/category'

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}`);
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/` + id);
  }
  createC(product: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, product);
  }
  updateC(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/${id}`, product);
  }
  deleteC(id: any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/delete/${id}`);
  }
}
