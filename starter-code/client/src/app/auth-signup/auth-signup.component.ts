import { Component, OnInit } from '@angular/core';
import { user } from '../interface/user';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user: user = {
    username: '',
    password: '',
    name: '',
    secret: ''
  }
  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signUp(user: user){
    this.sessionService.signup(user)
      .subscribe((user: any )=>{
        this.router.navigate(['/'])
      })
  }


}
