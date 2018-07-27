import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { environment } from '../environments/environment';

const {BASEURL} = environment;

interface UserObject {
  username: string;
  password: string;
  name: string;
  secret: string;
}

@Injectable()
export class SessionService {
  user: UserObject;
  options: object = { withCredential: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

 /*  handleError(e:Response) {
    return Observable.throw(e.json().message);
  } */

  signup(username, password, name, secret) {
    console.log(BASEURL)
    console.log(environment)
    return this.http.post(`${BASEURL}/api/signup`, { username, password, name, secret }, this.options)
      .map((res:Response) => {
        this.user = res.json();
        return this.user;
      })
  }

  login(username:string, password:string) {
    return this.http
      .post(`${BASEURL}/api/login`, {username,password},this.options)
      .map((res:Response) => {
        this.user = res.json();
        return this.user;
      })
  }

  logout() {
    return this.http
      .post(`${BASEURL}/api/logout`, {})
      .map((res:Response) => res.json())
  }

  
  isLoggedIn() {
    return this.http
      .get(`${BASEURL}/api/loggedin`)
      .map((res:Response) => res.json())
  }

  getPrivateData() {
    return this.http
      .get(`${BASEURL}/api/private`)
      .map((res:Response) => {
        this.user = res.json();
        return this.user;
      })
  } 
}









