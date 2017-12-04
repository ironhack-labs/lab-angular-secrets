import { Injectable } from '@angular/core';
import { User } from './shared/models/user.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  user:User;
  baseUrl:'localhost:4200'
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private userSubject: Subject<User>;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.userSubject = new Subject<User>();
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
  signup(user){
    console.log('Registrando :');
    console.log(user)
    return this.http.post(`${this.baseUrl}/signup`, JSON.stringify(user),this.options)
     .map(res =>{
       console.log('Buena')
       res.json();
     })
     .catch(err => this.handleError(err));
  }

  login(user){
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  isLogged():any{
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }
  logout(){
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  private doAuthentication(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    this.userSubject.next(this.user);
    return this.user;
  }
}
