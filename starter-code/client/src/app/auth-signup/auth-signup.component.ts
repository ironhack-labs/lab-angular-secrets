import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  constructor(private sessionService : SessionService, private router : Router) { }

  signup(username : string, password : string, secret: string, name : string){
    const user = {username, password, secret, name}
    this.sessionService.signUp(user).subscribe((user: any) => {
      this.router.navigate(['/'])
    })
  }
  ngOnInit() {
  }
}
