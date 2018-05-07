import { Injectable,EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class SessionService {
  BASEURL:string =  'http://localhost:3000';  
  user: any;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASEURL}/api/signup`, user,this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${this.BASEURL}/api/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASEURL}/api/loggedin`, this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .post(`${this.BASEURL}/api/logout`, {},this.options)
      .map(res => res.json())
      .map(() => (this.user = null))
      .catch(this.handleError);
  }
}
