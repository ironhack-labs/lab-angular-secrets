import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/session.service"

interface SignUpForm{
  username:string;
  password:string;
  name:string;
  secret:string;
}

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  formInfo:SignUpForm = {
    username: "",
    password: "",
  	name: "",
  	secret: ""
    };
    constructor(public auth:AuthService) { }

    ngOnInit() {
    }

    signup(){
      const {username, password, name, secret} = this.formInfo;
      if(username != "" && password != "" && name != "" && secret != ""){
        console.log(`Provide all the info`)
        this.auth.signup(username, password, name, secret)
        .map(user => console.log(user))
        .subscribe();
      } else{
        console.log("Provide all the info");
      }
    }
}
