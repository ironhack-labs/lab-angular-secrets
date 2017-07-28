import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  error: string;
  username:string;
  password:string;

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username, this.password)
    this.session.login(this.username,this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }
}
