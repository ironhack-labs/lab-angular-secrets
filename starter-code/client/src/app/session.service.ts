import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs/Rx';

const DOMAIN = "http://localhost:3000";
const PATH = "/api";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class SessionService {

  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  user: any;

  private userSubject = new Subject<any>();

  userJustLoggedIn$ = this.userSubject.asObservable();

  constructor(private http: Http) { }

  isAuthenticated() {
    return this.user !== undefined && this.user !== null;
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${BASEURL}/signup`, JSON.stringify(user), this.options)
      .map(res => {
        this.user = res.json();
        return this.userSubject.next(this.user);
      })
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${BASEURL}/login`, JSON.stringify(user), this.options)
      .map(res => {
        this.user = res.json();
        return this.userSubject.next(this.user);
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${BASEURL}/logout`, {}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${BASEURL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
