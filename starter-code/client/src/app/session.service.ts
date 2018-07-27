import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { environment } from "environments/environment";

const BASEURL = environment.BASEURL;

export interface User {
  username: string;
  secret: string;
}

@Injectable()
export class SessionService {
  user: User;
  error: string;

  options: object = { withCredentials: true };

  constructor(public http: Http) {
    this.loggedin().subscribe(data => null, error => (this.error = error));
  }

  signup(user: object) {
    return this.http
      .post(`${BASEURL}/api/signup`, user, this.options)
      .map((res: Response) => {
        this.user = res.json();
        return this.user;
      });
  }

  login(user: object) {
    return this.http
      .post(`${BASEURL}/api/login`, user, this.options)
      .map((res: Response) => {
        this.user = res.json();
        return this.user;
      });
  }

  logout() {
    return this.http
      .post(`${BASEURL}/api/logout`, {}, this.options)
      .map((res: Response) => {
        this.user = null;
        return this.user;
      });
  }

  loggedin() {
    return this.http
      .get(`${BASEURL}/api/loggedin`, this.options)
      .map((res: Response) => {
        this.user = res.json();
        return this.user;
      })
  }

  getSecret() {
    return this.http.get(`${BASEURL}/api/private`, this.options);
  }
}
