import { SessionService } from './../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './../shared/models/user.model';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user : User = new User();
  constructor(
    private SessionService:SessionService
  ) { }

  ngOnInit() {
  }
  onSubmitCreateForm(form:NgForm){

    // debugger
    this.SessionService.signup(this.user)
    .subscribe(user => {

      debugger
      // this.journal = journal;
      // debugger
      // this.router.navigate(['/journals', journal._id]);
      // this.router.navigate(['/journals']);
    });
  }
}
