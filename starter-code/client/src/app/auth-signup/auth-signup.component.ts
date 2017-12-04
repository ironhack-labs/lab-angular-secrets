import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup(formInfo) {
    console.log(formInfo.value);
    this.sessionService.signup(formInfo.value);
  }

}
