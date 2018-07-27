import { routes } from './../routes';
import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  formInfo: object = {};
  error: string;

  constructor(private sessionService:SessionService, private router:Router ) { }

  ngOnInit() {
    
  }

  signup(username:string, password:string, name:string, secret:string){
    console.log(username, password, name, secret)
    this.sessionService.signup(username,password,name,secret).subscribe((user:any) => {
      console.log(user)
      console.log(`Welcome user ${user.username}`)
      this.router.navigate(['/private'])
    })
  }
}
