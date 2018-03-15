import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../shared/models/user.model';
import { SessionService } from './../shared/services/session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user : User = new User();
  error: Object;

  constructor(
    private SessionService:SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitCreateForm(signupform:NgForm){
    this.SessionService.signup(this.user)
    .subscribe(
      (user) => {
        signupform.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.error = error;
      });
  }
}
