import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }


  signup(username, password, name, secret) {
    console.log('singup')
    this.sessionService.signup(username, password, name, secret).subscribe( (user: any) => {
      this.router.navigate(['/private'])
    })
  }
}
