import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
const BASEURL = "http://localhost:3000/api";
const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  user:object;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  constructor(public http:Http) {}

  signup(userData){
    var headers = new Headers();
    let body = JSON.stringify(userData);
    // var body = "name=" + data.name + "&image=" + data.image + "&description="+ data.description;
    return this.http.post(`${BASEURL}/signup`,body,this.options)
             .subscribe(res => res.json());
    }

  login(user):Observable<any>{
    return this.http.post(`${BASEURL}/signup`, JSON.stringify(user), this.options)
      .map(res => {
        return this.doAuthentication(res.json());
      })
      .catch(this.handleError.bind(this));
  }

  private doAuthentication(user) {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    return this.user;
  }

  protected handleError(error: Response | any): Observable<any> {
    console.error(error.json());
    return Observable.throw(error.json());
  }

  isLogged(){
    if (this.user)
      return true;
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(CURRENT_USER_KEY);
    return this.http.post(`${BASEURL}/logout`, null, this.options)
      .catch(this.handleError.bind(this));

  }

}
