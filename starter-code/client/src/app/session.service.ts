import { User } from './shared/user.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
const BASEURL = "http://localhost:3000/api";
const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private user:User;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: false });
  private userSubject;
  constructor(public http:Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  }

  signup(userData){
    var headers = new Headers();
    let body = JSON.stringify(userData);
    return this.http.post(`${BASEURL}/signup`,body,this.options)
             .map(res => {
               this.doAuthentication(res.json());
             })
             .catch(error => this.handleError(error));
    }

  login(user):Observable<User>{
    return this.http.post(`${BASEURL}/signup`, JSON.stringify(user), this.options)
      .map(res => {
        return this.doAuthentication(res.json());
      })
      .catch(error => this.handleError(error));
  }

  private doAuthentication(user: User): User {
    this.user = user;
    console.log("ENTRE");
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    return this.user;
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

  isLogged(){
    if (this.user)
      return this.user;
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(CURRENT_USER_KEY);
    return this.http.post(`${BASEURL}/logout`, null, this.options)
      .catch(error => this.handleError(error));

  }

}
