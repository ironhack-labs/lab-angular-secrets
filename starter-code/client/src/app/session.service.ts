import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASEURL = 'http://localhost:3000/api';

@Injectable()
export class SessionService {

  private user: object;
  private attachUser: EventEmitter<any> = new EventEmitter<any>();
  private options = { withCredentials: true };

  constructor(private http: Http) { }

  private attachUserSession(user) {
    this.user = user;
    this.attachUser.emit(user);
    return user;
  }

  signup(username, password) {
    return this.http.post(`${BASEURL}/signup`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.attachUserSession(user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.attachUserSession(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASEURL}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.attachUserSession(null))
      .catch(this.handleError);
  }

  isLogged() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.attachUserSession(user))
      .catch(this.handleError);
  }

  private handleError(e) {
    return Observable.throw(e.json().message);
  }

}
