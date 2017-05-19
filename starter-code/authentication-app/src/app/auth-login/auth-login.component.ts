import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: '',
    // secret:'inventado',
    // name:'tbInventado'
  };
  error: string;
  privateData: any = '';
  constructor(private session: SessionService,private router: Router) { }

  ngOnInit() {
    // this.user = {
    //   username: "Momo",
    //   password: "1",
    //   name: "Lola",
    //   secret: "lab-angular-authentication"
    // }
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  login() {
    console.log("login");
    // this.user = this.formInfo;
    // this.router.navigate(['/private'])
    this.session.login(this.formInfo)
      .subscribe(
        (user) =>{
        this.successCb(user)
        this.router.navigate([''])
        },
        (err) => this.errorCb(err)
      );
  }

  logout() {
    // this.user = undefined;
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }
}
