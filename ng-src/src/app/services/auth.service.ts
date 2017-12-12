import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";
import { UserResponse } from '../models/user-response';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<UserResponse>('http://192.168.0.66:3000/users/register', user, { headers: headers }).pipe(
      tap((res) => res)
    );
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<UserResponse>('http://192.168.0.66:3000/users/authenticate', user, { headers: headers }).pipe(
      tap((res) => res)
    );
  }

  getProfile() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    this.loadToken();
    headers.set('Authorization', this.authToken);
    return this.http.get<UserResponse>('http://192.168.0.66:3000/users/profile', { 
      headers: new HttpHeaders().set('Authorization', this.authToken)
    }).pipe(
      tap((res) => res)
    );
  }  

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  
}
