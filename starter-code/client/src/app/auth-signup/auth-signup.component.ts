import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username:string;
  name:string;
  secret:string;
  password:string;
  error:string;
  
  constructor(public session:SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe();
  }

  signup(){
    this.session.signup(this.username,this.name,this.secret,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }
}
