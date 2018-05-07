import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(public sessionService: SessionService) { }

  ngOnInit() {}

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe();
  }

}

