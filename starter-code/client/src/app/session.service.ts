import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from "@angular/http";

import { environment } from '../environments/environment';

import {map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';

const {BASEURL} = environment;

@Injectable()
export class SessionService {
  user: any;
  options:object = {withCredentials:true};

  constructor(private http: Http) {
    this.isLogged().subscribe();
   }

  signup(user: object): Observable<object> {
    return this.http.post(`${BASEURL}/api/signup`, user, this.options).pipe(
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  login(username: string, password: string){
    return this.http.post(`${BASEURL}/api/login`, {username, password}, this.options).pipe(
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  isLogged(){
    return this.http.get(`${BASEURL}/api/loggedin`,this.options).pipe(
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  logout(){
    return this.http.post(`${BASEURL}/api/logout`,this.options).pipe(
      map( (res:Response) => {
        this.user = null;
      }),
      catchError( e => of(this.handleError(e)))
    )

  }

  handleError(error){
    console.log('SessionServiceError')
    console.log(error.message);
    console.log(error);
    return error;
  }
}

