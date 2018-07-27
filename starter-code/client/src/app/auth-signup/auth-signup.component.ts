import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionService } from '../session.service';

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

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username, name, secret, password){
    this.sessionService.signup(username,name,secret,password).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      this.router.navigate(['/']);
    });
  }
}
