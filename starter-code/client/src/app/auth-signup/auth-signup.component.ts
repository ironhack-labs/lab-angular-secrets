import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { User } from 'interfaces/user';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})

export class AuthSignupComponent implements OnInit {
  user: User = {
    username: ""
  };
  constructor(private sesionService: SessionService) { }

  ngOnInit() {
  }

  sendData(user: User){
    this.sesionService.signup(user).subscribe();
  }
}
