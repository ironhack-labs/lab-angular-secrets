import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  username:string;
  password:string;
  constructor(private session: SessionService) { }
  ngOnInit() {
  }

  login() {
    this.session.login(this.username,this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  signup() {
    this.session.signup(this.username, this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

}
