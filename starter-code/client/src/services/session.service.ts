import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

interface User {
  username: string;
  password: string;
  name: string;
  secret: string;
}

@Injectable()
export class SessionService {

  private user: User;

  baseURL: string = "http://localhost:3000";
  options: object = {withCredentials:true}

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    console.log(e)
    return Observable.throw(e.json().message);
  }

  private configureUser() {
 
    return user => {
      this.user = user;
      console.log(`Setting user, welcome ${this.user.username}`);
      return user;
    };
  }

  private removeUser() {
    return user => {
      console.log(`bye bye ${this.user.username}`);
      this.user = null;
      return user;
    };
  }

  getUser(){
    return this.user;
  }

  signup(username:string, password:string, name :string, secret:string) {
    return this.http
      .post(`${this.baseURL}/api/signup`, {username, password, name , secret}, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }

  login( username:string, password:string) {
    return this.http
      .post(`${this.baseURL}/api/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .get(`${this.baseURL}/api/logout`, this.options)
      .map(res => res.json())
      .map(this.removeUser())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .get(`${this.baseURL}/api/loggedin`, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }
}
