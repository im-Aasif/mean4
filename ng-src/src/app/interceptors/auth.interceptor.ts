import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    console.log('Intercepting http requests');    
    const authReq = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
        'Content-Type': 'application/json'
      }
    });    
    return next.handle(authReq);
  }
}