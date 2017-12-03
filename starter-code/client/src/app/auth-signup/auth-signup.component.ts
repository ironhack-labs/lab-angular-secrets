import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "../session.service";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})

export class AuthSignupComponent implements OnInit {
  user: any;

  formInfo = {
    username: '',
    password: '',
    name:''
  };

  error: string;
  privateData: any = '';

  constructor(private session: SessionService) { }

  ngOnInit() {
  //   this.session.isLoggedIn()
  //     .subscribe(
  //       (user) => this.user(user)
  //     );
  }

}
