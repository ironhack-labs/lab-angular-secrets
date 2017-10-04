import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {

  //user: any;

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  signup(user: any) {
    return this.http.post(
      this.baseUrl + '/api/signup',
      user
    )
  }

  login(info: any) {
    return this.http.post(
      this.baseUrl + '/api/login',
      info
    )
  }

  isLogged() {
    return this.http.get(this.baseUrl + '/api/loggedin');
  }

  logout() {
    return this.http.delete(
      this.baseUrl + '/api/delete'
    );
  }


}
