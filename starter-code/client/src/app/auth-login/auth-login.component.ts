import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  error: string;

  constructor(public sessionService: SessionService, public route: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    const user = {
      username: form.value.username,
      password: form.value.password
    }
    this.sessionService.login(user).subscribe(
      data => this.route.navigate(['/']),
      error => this.error = error
    )
  }
}
