import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASEURL = 'http://localhost:3000';

@Injectable()
export class SessionService {

  user: any;

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${BASEURL}/api/signup`, user)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/api/login`, {username, password})
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/api/loggedin`)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .post(`${BASEURL}/api/logout`, {})
      .map(res => res.json())
      .map(() => (this.user = null))
      .catch(this.handleError);
  }

}
