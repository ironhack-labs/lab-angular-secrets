import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';

import {map} from 'rxjs/operator/map';
import { Observable } from "../../node_modules/rxjs";


interface UserObject {
  username: string
}

@Injectable()
export class SessionService {
  user:UserObject;

 options:object = {withCredentials:true};

 constructor(private http:Http) {
   this.isLogged().subscribe();
 }

 isLogged(){
   return this.http.get('http://localhost:3000/api/auth/login',this.options).
     map( (res:Response) => {
       this.user = res.json();
       console.log(`Automatically login ${this.user.username}`);
       return this.user;
     })
   //  catchError(e => {console.log("You have to login first!"); return of(e)});
 }


 errorHandler(e){
   console.log('SessionServiceError')
   console.log(e.message);
   console.log(e);
   return e;
 }

 signup(username:string, password:string, name: string, secret: string): Observable<object>{
   return this.http.post('http://localhost:3000/api/auth/login',{username,password, name, secret},this.options).
     map( (res:Response) => {
       let data = res.json();
       this.user = data.user;
       return this.user;
     })
  //   catchError( e => of(this.errorHandler(e)))
 }

 login(username:string, password:string): Observable<object>{
   return this.http.post('http://localhost:3000/api/auth/login',{username,password},this.options).
     map( (res:Response) => {
       let user = res.json();
       this.user = user;
       return this.user;
     })
 //    catchError( e => of(this.errorHandler(e)))
 }

 logout(){
   return this.http.get('http://localhost:3000/api/auth/login',this.options).
     map( (res:Response) => {
       this.user = null;
     })
  //   catchError( e => of(this.errorHandler(e)))
 }

}

