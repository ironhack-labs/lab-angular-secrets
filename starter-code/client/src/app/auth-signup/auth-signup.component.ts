import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username: string;
  password: string;
  name:string;
  secret:string;
  error: string;


  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }
  signup() {
    const user = {
      username: this.username,
      password: this.password,
      name: this.name,
      secret: this.secret
    };
    console.log(user);
    this.sessionService.signup(user).subscribe();
  }

}
