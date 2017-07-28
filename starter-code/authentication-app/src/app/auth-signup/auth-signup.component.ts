import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})

export class AuthSignupComponent implements OnInit {
  error: string;
  username:string;
  password:string;

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
  }

  signup(form) {
    console.log(form.value);
    this.session.signup(form.value)
      .subscribe(
        (user) => {
          console.log(user)
          this.router.navigate(['private'])
        },
        (err) => this.error = err
      );
  }

}
