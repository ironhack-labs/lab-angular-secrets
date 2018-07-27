import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  formInfo:object;
  error: string;

  constructor(public sessionService: SessionService, public route: Router) { }

  ngOnInit() {
  }

  signup(form: NgForm){
    const user = {
      username: form.value.username,
      name: form.value.name,
      secret: form.value.secret,
      password: form.value.password
    }

    this.sessionService.signup(user).subscribe(
      () => this.route.navigate(['/']),
      error => this.error = error
    )
  }
}
