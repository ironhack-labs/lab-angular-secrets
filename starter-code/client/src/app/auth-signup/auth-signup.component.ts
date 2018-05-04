import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  formInfo = {
    username: '',
    password: '',
    name: '',
    secret:''
  };

 
  
  constructor(public sessionService: SessionService,public router: Router) { }


  ngOnInit() {
  }

  signup(){
    this.sessionService.signup(this.formInfo)
    .subscribe(() => this.router.navigate(["/private"]));
  
  }
  }

