import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import { environment } from '../environments/environment'


@Injectable()
export class SessionService {
  constructor(private http:Http) { }

  user: object
  options: object = {
    withCredentials: true
  }

  signup(username: string, password: string, name: string, secret: string): Observable<object> {
    const signupInfo = {
      username,
      password,
      name,
      secret
    }
    return this.http.post(`${environment.BASE_URL}/api/signup`, signupInfo, this.options)
      .map((res: Response) => {
        let data = res.json()
        this.user = data.user
        return this.user
      })
  }


  login(username:string, password:string): Observable<object>{
    return this.http.post(`${environment.BASE_URL}/api/login`,{username,password}, this.options)
      .map( (res:Response) => {
        let user = res.json();
        this.user = user;
        return this.user;
      })
    }


  logout(){
    return this.http.get(`${environment.BASE_URL}/api/logout`, this.options)
      .map( (res:Response) => {
        this.user = null;
      })
    }


  secret(): any{
    return this.http.get(`${environment.BASE_URL}/api/private`, this.options)
      .map( (res:Response) => {
        return res.json()
      })
    }
}
