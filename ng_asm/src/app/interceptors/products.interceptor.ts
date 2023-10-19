import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenLocal = localStorage.getItem('token');

    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${tokenLocal}`
      }
    });

    return next.handle(modifiedRequest)
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse) {
              // console.log('Response:', event);
            }
          },
          (error) => {
            // console.error('Error:', error);
          }
        )
      );
  }
}
