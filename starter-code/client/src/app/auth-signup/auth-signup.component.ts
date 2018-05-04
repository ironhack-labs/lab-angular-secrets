import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username: string;
  name: string;
  secret: string;
  password: string;


  constructor(
    public sessionService: SessionService,
    public router: Router) { }

  ngOnInit() {
  }

  signup() {
    const user = {
      username: this.username,
      name: this.name,
      secret: this.secret,
      password: this.password,
    };
    this.sessionService.signup(user).subscribe( () => {
      this.router.navigate(['/private'])
    })
  }
}
