import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../shared/models/user.model';
import { SessionService } from './../shared/services/session.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  user : User = new User();
  error: Object;

  constructor(
    private SessionService:SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLoginForm(loginform:NgForm){
    this.SessionService.login(this.user)
    .subscribe(
      (user) => {
        loginform.reset();
        this.router.navigate(['/private']);
      },
      (error) => {
        this.error = error;
      });
  }
}
