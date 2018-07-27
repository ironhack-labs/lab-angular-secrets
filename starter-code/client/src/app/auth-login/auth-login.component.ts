import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  constructor(private sessionService: SessionService, private router:Router) { }

  ngOnInit() {

  }

  login(form){
    this.sessionService.login(
      form.value.username, 
      form.value.password
    ).subscribe(user => {
      this.router.navigate(['/private']);
    }) 
  }
}
