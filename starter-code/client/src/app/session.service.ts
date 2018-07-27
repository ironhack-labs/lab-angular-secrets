import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { of } from 'rxjs';


const {BASEURL} = environment;

interface UserObject{
  username:string,
}


@Injectable()
export class SessionService {

  user:UserObject;

  options:object = {withCredentials:true};

  constructor(private http:Http) {
    this.isLogged().subscribe();
  }

  isLogged(){
    return this.http.get(`${BASEURL}/api/auth/currentuser`,this.options)
      .map( (res:Response) => {
        this.user = res.json();
        console.log(this.user)
        console.log(`Automatically login ${this.user}`);
        return this.user;
      })
      .catch(e => {console.log("You have to login first!"); return of(e)})
  }


  errorHandler(e){
    console.log('SessionServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }

  signup(username:string, name:string, secret:string, password:string,): Observable<object>{
    return this.http.post(`${BASEURL}/api/auth/signup`,{username,name,secret,password},this.options)
      .map( (res:Response) => {
        let data = res.json();
        this.user = data.user;
        return this.user;
      })
      .catch( e => of(this.errorHandler(e)))
    
  }

  login(username:string, password:string): Observable<object>{
    return this.http.post(`${BASEURL}/api/auth/login`,{username,password},this.options)
      .map( (res:Response) => {
        let user = res.json();
        this.user = user;
        return this.user;
      })
      .catch( e => of(this.errorHandler(e)))
    
  }

  logout(){
    return this.http.get(`${BASEURL}/api/auth/logout`,this.options)
      .map( (res:Response) => {
        this.user = null;
      })
      .catch( e => of(this.errorHandler(e)))
    
  }

}