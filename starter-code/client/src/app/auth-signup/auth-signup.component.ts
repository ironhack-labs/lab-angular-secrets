import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  constructor(private sessionService: SessionService, private router:Router) { }

  ngOnInit() {

  }

  signup(form){
    this.sessionService.signup({
      username: form.value.username, 
      name: form.value.name, 
      secret: form.value.secret, 
      password: form.value.password
    }).subscribe(user => {
      this.router.navigate(['/private']);
    }) 
  }
}
