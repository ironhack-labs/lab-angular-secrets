import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASEURL = `http://localhost:3000`;
  user:any;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: Object = { withCredentials:true }

  constructor(private http:Http) { 
    this.isLoggedIn().subscribe()
  }
  handleError(e){
    // return Observable.throw(e.json().message)
  }
  handleUser(user?){
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }
  isLoggedIn(){
    return this.http.get(`${this.BASEURL}/api/loggedin`, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    
  }
  signup(user){
    return this.http.post(`${this.BASEURL}/api/signup`, user, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    // .catch(this.handleError)
  }
  login(username,password){
    return this.http.post(`${this.BASEURL}/api/login`, {username, password}, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    // .catch(this.handleError)
  }
  logout(){
    return this.http.get(`${this.BASEURL}/api/logout`)
    .map( () => this.handleUser())
    // .catch(this.handleError)
  }
}
