import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(email: any): Observable<any> {
    return this.http.post<any>('http://localhost:7000/mail/sendmail', email)
  }
}
