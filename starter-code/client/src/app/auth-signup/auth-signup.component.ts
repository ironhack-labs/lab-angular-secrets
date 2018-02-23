import { Component, OnInit } from '@angular/core';
import { SessionService } from 'services/Session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username:string;
  password:string;
  name:string;
  secret:string;

  error:string;

  constructor( public session:SessionService) { }

  ngOnInit() {
  }

  signup(){
    this.session.signup(this.username,this.password,this.name,this.secret)
    .catch(e => this.error = e)
    .subscribe()
  }
}
