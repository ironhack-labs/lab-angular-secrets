import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "../session.service";



@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
// export class AuthLoginComponent implements OnInit {
//   constructor() { }
//
  // ngOnInit() {
  // }
// }



export class AuthLoginComponent implements OnInit {
  user: any;

  loginInfo = {
    username: '',
    password: '',
  };

  error: string;
  privateData: any = '';

  constructor(private session: SessionService) { }
  ngOnInit() {
  }
  
  }
