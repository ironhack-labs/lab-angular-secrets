import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user: object = {
    username: "",
    password: "",
    fullname: "",
    secret: ""
  }
  constructor(public miServicio: SessionService) { }

  ngOnInit() {
  }
  signup(user){
    this.miServicio.signup(user).subscribe();
  };

}
