import { User } from './../model/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private static readonly BASE_API = `${environment.baseApi}`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: SessionService.defaultHeaders, withCredentials: true });

  private user: User;
  private userSubject: Subject<User>;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.userSubject = new Subject<User>();
  }

  onUserChanges(): Observable<User> {
    return this.userSubject.asObservable();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    debugger;
    return this.http.post(`${SessionService.BASE_API}/signup`, JSON.stringify(user), SessionService.defaultOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
