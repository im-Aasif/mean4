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
    return this.http.post<UserResponse>('http://localhost:3000/users/register', user)
    .pipe(tap((res) => res));
  }

  authenticateUser(user) {
    return this.http.post<UserResponse>('http://localhost:3000/users/authenticate', user)
    .pipe(tap((res) => res));
  }

  getProfile() {
    return this.http.get<UserResponse>('http://localhost:3000/users/profile')
    .pipe(tap((res) => res));
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
