import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  constructor(private session: SessionService, private router : Router) { }

 ngOnInit() {
  }

 login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
      this.router.navigate(['private'])
  }

 errorCb(err) {
    this.error = err;
    this.user = null;
  }

 successCb(user) {
    this.user = user;
    this.error = null;
  }
}
