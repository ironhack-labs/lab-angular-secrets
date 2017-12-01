import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  newUser: any = {};

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitSignupForm() {
    console.log(this.newUser);
    this.sessionService.signup(this.newUser)
      .subscribe(
        (data) => {
          console.log('Signup Success! --> ', data);
          this.sessionService.updateInfo(data);
          this.router.navigate(['private']);
        }
      )
  }
}
