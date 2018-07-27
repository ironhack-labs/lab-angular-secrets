import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user: any;
  error: string;

  constructor(public service: SessionService, private router: Router) { }

  signup(username: string, password: string, name: string, secret: string){
    this.service.signup(username, password, name, secret).subscribe ( (user:any) =>{
      console.log("Welcome User "+ user.username);
      this.router.navigate(['/']);
    })
  }
  ngOnInit() {
  }
}
