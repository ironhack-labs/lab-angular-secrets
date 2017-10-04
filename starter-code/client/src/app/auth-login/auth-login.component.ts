import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  user: any = {};

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitLoginForm() {
    this.sessionService.login(this.user)
      .subscribe(
        (data) => {
          console.log('Login Success! --> ', data);
          this.router.navigate(['private']);
        }
      )
  }

}
