import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {User } from '../shared/models/user.model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  sessions:any;
  user: User;
  constructor(public sessionService:SessionService) { }

  ngOnInit() {
    // this.sessionService.login(this.user).subscribe( user =>{
    //   console.log(user);
    //   this.sessions = user;
    // }
  // );
  //
// ⁄
}
}
