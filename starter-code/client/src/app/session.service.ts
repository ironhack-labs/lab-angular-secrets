import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { user } from './interface/user';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment'
import { of } from 'rxjs/observable/of';

const {BASEURL} = environment;

@Injectable()
export class SessionService {
  user: user;
  options: Object = {withCredentials: true};

  handleError(e){
    console.log(e);
    return e;
  }

  constructor(private http: Http) { }

  signup(user: user): Observable<Object>{
    return this.http.post(`${BASEURL}/api/signup`, user, this.options)
    .map(res => {
      let data = res.json()
      this.user = data.user;
      console.log(this.user)
      return this.user;
    })    
    .catch(e => of(this.handleError(e)))
  }

  login(user:user): Observable<Object>{
    return this.http.post(`${BASEURL}/api/login`, user, this.options)
    .map(res => {
      let data = res.json()
      this.user = data.user;
      return this.user;
    })
    .catch(e => of(this.handleError(e)))
  }
  
  isLogged(){
    return this.http.post(`${BASEURL}/api/loggedin`, this.options)
    .map(res => {
      this.user = res.json()
      return this.user;
    })
    .catch(e => of(this.handleError(e)))
  }

  logout(){
    return this.http.post(`${BASEURL}/api/login`, this.options)
    .map(res => {  
      return this.user = null;
    })
    .catch(e => of(this.handleError(e)))
  }
}
