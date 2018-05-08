import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  secret: string;
  constructor(public session: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup(username, name, secret, password) {
    const user = {
      username: this.username,
      password: this.password,
      name: this.name,
      secret: this.secret
    };
    this.session.signup(user).subscribe(() => this.router.navigate(["/login"]));
  }

}
