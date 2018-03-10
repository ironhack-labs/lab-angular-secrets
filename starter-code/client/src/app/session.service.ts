import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';

@Injectable()
export class SessionService {
  base_URL = 'http://localhost:3000/api';
  options = { withCredentials: true }; // IMPORTANT FOR SESSION VALIDATION

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // 1st Way to Send Data to Backend
  login (username, password): Observable<any> {
    return this.http.post(`${this.base_URL}/login`, {username, password}, this.options)
     .map(res => res.json())
     .catch(err => this.handleError(err));
  }
  // 2nd Way
  signup (formSignup): Observable<any> {
    return this.http.post(`${this.base_URL}/signup`, formSignup, this.options)
     .map(res => res.json())
     .catch(err => this.handleError(err));
  }
  loggedIn () {
    return this.http.get(`${this.base_URL}/loggedin`, this.options)
     .map(res => res.json())
     .catch(err => this.handleError(err));
  }
  logout () {
    return this.http.post(`${this.base_URL}/logout`, {})
     .map(res => res.json())
     .catch(err => this.handleError(err));
  }
}


