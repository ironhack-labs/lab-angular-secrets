import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  error: string;
  username:string;
  name:string;
  password:string;
  secret:string;
  constructor(public session: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.username, this.name, this.secret, this.password)
      .catch(e => this.error = e)
      .subscribe(() => this.router.navigate(['/private']));
  }

}

