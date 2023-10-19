import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http : HttpClient) { }

  paypal(d: any): Observable<any> {
    return this.http.post<any>('http://localhost:7000/paypal', d);
  }
}
