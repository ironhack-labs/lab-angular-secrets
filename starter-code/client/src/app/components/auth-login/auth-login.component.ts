import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../shared/services/session.service';

const body = JSON.stringify(this.jiraConfig);

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;
  constructor(private session: SessionService) { }

  onSubmitLogin(loginForm) {
    this.session.login(this.user).subscribe(
      (user) => {
        loginForm.reset();
      //  this.router.navigate(['/phones']);
      },
      (error) => {
        this.error = error;
      }
    );
  }
  ngOnInit() {
  }
}
