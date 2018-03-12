import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };

  constructor(
    private session: SessionService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  sendForm() {
    this.session.login(this.formInfo.username, this.formInfo.password)
    .subscribe(response => this.route.navigate(['private']));
  }

}
