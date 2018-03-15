import { User } from './../models/user.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private static readonly BASE_API: string = environment.apiBase;
  private static readonly SESSIONS_API: string = `${SessionService.BASE_API}`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: SessionService  .defaultHeaders });

  private user: User;

  constructor(
    private http: Http
  ) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
   }

  signup(user:User): Observable<User> {
    return this.http.post(`${SessionService.SESSIONS_API}/users/signup`, JSON.stringify(user), SessionService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  login(user:User): Observable<User> {
    return this.http.post(`${SessionService.SESSIONS_API}/session/login`, JSON.stringify(user), SessionService.defaultOptions)
      .map((res: Response) => {
        debugger
        return this.doAuthentication(res.json());
      })
      .catch((error: Response) => this.handleError(error));
  }

  private doAuthentication(user: User): User {
    debugger
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    return this.user;
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
