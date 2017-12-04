import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent {
  user: any;
  formInfo = {
    username: '',
    password: '',
    name: '',
    secret: ''
  };
  error: string;

  constructor(private session: SessionService, private router: Router) { }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(['private']);
        },
        (err) => {
          this.error = err;
          this.user = null;
        }
      );
  }

}
