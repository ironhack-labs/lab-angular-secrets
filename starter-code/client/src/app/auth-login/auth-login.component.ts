import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  providers: [SessionService]
})
export class AuthLoginComponent implements OnInit {
  formInfo: any = {
    username: '',
    password: ''
  };
  constructor(private sessionS: SessionService, private route: Router) { }

  ngOnInit() {
  }

  sendForm() {
    this.sessionS.login(this.formInfo.username, this.formInfo.password)
      .subscribe(res => this.route.navigate(['private']));
  }
}