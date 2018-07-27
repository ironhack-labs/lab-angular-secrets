import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';

interface UserObject {
  username: string;
}

@Injectable()
export class SessionService {
  user : UserObject;

  options:object = {withCredentials:true};

  constructor(public http : Http) {
    this.isLogged().subscribe()
   }

  signUp(user){
    const data = {
      username: user.username,
      password: user.password,
      name: user.name,
      secret: user.secret
    }
    return this.http.post(`${environment.BASEURL}/api/signup`, data, this.options)
      .map( (res:Response) => {
        let data = res.json()
        this.user = data.user;
        return this.user;
      }) 
  }

  login(username, password){
    return this.http.post(`${environment.BASEURL}/api/login`, {username, password}, this.options)
      .map( (res:Response) => {
        let user = res.json()
        this.user = user;
        return this.user;
      }) 
  }
  isLogged(){
      return this.http.get(`${environment.BASEURL}/api/loggedin`, this.options)
        .map( (res:Response) => {
          let user = res.json()
          this.user = user;
          return this.user;
        }) 
  }
  logout(){
    return this.http.get(`${environment.BASEURL}/api/logout`, this.options)
        .map( (res:Response) => {          
          this.user = null;
          console.log(this.user)
        }) 
  }
  handleError(e){
    console.log('SessionServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }
}
