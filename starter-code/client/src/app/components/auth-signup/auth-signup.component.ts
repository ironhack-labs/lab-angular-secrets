import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../shared/services/session.service';
import { User } from './../../shared/model/user.model';

const body = JSON.stringify(this.jiraConfig);
const headers = new Headers({ 'Content-Type': 'application/json' });
//const options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user: User = new User();
  error: Object;

  constructor(private session: SessionService) { }

  onSubmitLogin(formInfo) {
    this.session.signup(this.user)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  ngOnInit() {
  }
}
