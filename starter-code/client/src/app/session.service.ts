import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

const KUKARAMAKARA = "http://localhost:3000";
@Injectable()
export class SessionService {
  user: any;
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  signup(user) {
    return this.http
      .post(`${KUKARAMAKARA}/api/signup`, { user })
      .map(res => res.json());
  }
  login(username, password) {
    return this.http
      .post(`${KUKARAMAKARA}/api/login`, { username, password })
      .map(res => res.json());
  }
  isLogged() {
    return this.http.get(`${KUKARAMAKARA}/api/loggedin`).map(res => res.json());
  }
  logout() {
    return this.http.get(`${KUKARAMAKARA}/api/logout`).map(res => res.json());
  }
  handleError(err) {
    return Observable.throw(err.json().message);
  }
}
