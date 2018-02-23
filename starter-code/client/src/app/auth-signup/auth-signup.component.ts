import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  constructor(private session: SessionService) {
  }

  username: string;
  password: string;
  error: string;
  secret: string;
  name: string;

  ngOnInit() {

  }

  signup(username, name, secret, password) {
    this.session.signup(this.username, this.password, this.secret, this.name)
      .catch(e => this.error = e)
      .subscribe();
  }
}
