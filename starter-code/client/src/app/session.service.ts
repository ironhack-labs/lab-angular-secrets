import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SessionService {

  user: any;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials:true };

  BASEURL:string = 'http://localhost:3000';
  
  constructor(public http: Http) { 
    this.isLoggedIn().subscribe(e=>console.log(e));
  }

  handleUser(user?:object) {
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }
  handleError(error){
    return Observable.throw(error.json().message)
  }
  signup(user) {
    return this.http.post(`${this.BASEURL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError)
  }
  login(username,password) {
    return this.http.post(`${this.BASEURL}/api/login`, {username,password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError)
  }
  isLoggedIn() {
    return this.http.get(`${this.BASEURL}/api/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError)
  }
  logout() {
    return this.http.post(`${this.BASEURL}/api/logout`, this.options)
      .map( () => this.handleUser())
      .catch(this.handleError)
  }

}
