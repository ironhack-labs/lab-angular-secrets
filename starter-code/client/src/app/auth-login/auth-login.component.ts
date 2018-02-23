import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(
    public session: SessionService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  getLogged() {
    this.session.login(this.username, this.password)
      .catch(e => this.error = e)
      .subscribe(() => this.router.navigate(['/private']))
  }

}
