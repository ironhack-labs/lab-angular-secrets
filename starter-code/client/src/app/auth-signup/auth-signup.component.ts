import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css'],
  providers: [SessionService]
})
export class AuthSignupComponent implements OnInit {
  constructor(private sessionS: SessionService, private router: Router) { }

  ngOnInit() {
  }
  sendSignupForm(myForm) {
    this.sessionS.signup(myForm.value)
      .subscribe(() => this.router.navigate(['private']));
  }
}