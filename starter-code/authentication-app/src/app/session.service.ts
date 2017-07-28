import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
  user:Object;
  BASE_URL:string = 'http://localhost:3000/api';
  options:Object = {withCredentials: true};
  constructor(private http: Http) { }

  signUp(user):Observable<Object>{
    return this.http.post(`${this.BASE_URL}/signup`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(username:string, password:string){
    return this.http.post(`${this.BASE_URL}/login`, {username, password}, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }
  
  isLoggedIn(){}
  logout(){}
  handleError(e){
    console.error('Error calling the API');
    return Observable.throw(e.json().message);
  }
}
