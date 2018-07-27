import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    console.log('login')
    this.sessionService.login(username, password).subscribe( (user: any) => {
      this.router.navigate(['/private'])
    })
  }
}
