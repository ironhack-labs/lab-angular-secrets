import { Injectable } from '@angular/core';
import { User } from 'interfaces/user';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '_debugger';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionService {

  constructor(private http: Http) { }
  user: User;
  options: object = {withCredentials: true};

  signup(newUser: User): Observable<User>{
    return this.http.post(`${environment.BASE_URL}/api/signup`,newUser, this.options)
    .map((res: any) => {
      this.user = res.json();
      return this.user
    });
  };
  login(knownUser: any): Observable<User>{
    console.log(knownUser)
    return this.http.post(`${environment.BASE_URL}/api/login`,knownUser, this.options)
    .map((res: any) => {
      this.user = res.json();
      return this.user
    });

  };
  isLogged(){};
  logout(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/api/logout`, this.options)
      .map(() => this.user = null);
  };
  handleError(){};
}
