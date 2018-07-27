import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  constructor(private SessionService: SessionService) { }

  ngOnInit() {
  }
  login(username: string, password: string){
    return this.SessionService.login(username, password).subscribe( user => {

    });
  }
}
