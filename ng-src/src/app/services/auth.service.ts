import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";
import { UserResponse } from '../models/user-response';
import { Config } from '../models/config';

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
<<<<<<< HEAD
    return this.http.post<UserResponse>('http://localhost:3000/users/register', user, { headers: headers }).pipe(
=======
    const validUrl = `http://${Config.host.ipAddr}${Config.apis.register}`
    console.log(validUrl)
    return this.http.post<UserResponse>(validUrl, user, { headers: headers }).pipe(
>>>>>>> origin/master
      tap((res) => res)
    );
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
<<<<<<< HEAD
    return this.http.post<UserResponse>('http://localhost:3000/users/authenticate', user, { headers: headers }).pipe(
=======
    const validUrl = `http://${Config.host.ipAddr}${Config.apis.authenticate}`
    console.log(validUrl)
    return this.http.post<UserResponse>(validUrl, user, { headers: headers }).pipe(
>>>>>>> origin/master
      tap((res) => res)
    );
  }

  getProfile() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    this.loadToken();
    headers.set('Authorization', this.authToken);
<<<<<<< HEAD
    return this.http.get<UserResponse>('http://localhost:3000/users/profile', { 
=======
    const validUrl = `http://${Config.host.ipAddr}${Config.apis.profile}`
    
    return this.http.get<UserResponse>(validUrl, { 
>>>>>>> origin/master
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
