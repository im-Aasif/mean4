import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { UserResponse } from '../models/user-response';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  jwtHelper: JwtHelperService;

  constructor(
    private http: HttpClient,    
  ) { 
    this.jwtHelper = new JwtHelperService();
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<UserResponse>('http://localhost:3000/users/register', user, { headers: headers }).pipe(
      tap((res) => res)
    );
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<UserResponse>('http://localhost:3000/users/authenticate', user, { headers: headers }).pipe(
      tap((res) => res)
    );
  }

  getProfile() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    this.loadToken();
    headers.set('Authorization', this.authToken);
    return this.http.get<UserResponse>('http://localhost:3000/users/profile', { 
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
    const token = localStorage.getItem('id_token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  
}
