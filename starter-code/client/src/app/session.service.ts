import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './models/user.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // getPrivateData() : {
  //   return this.http.get(`/private`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}
