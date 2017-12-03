import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  user: any;

  formInfo = {
    username: '',
    password: '',
    name:''
  };

  error: string;
  privateData: any = '';

  constructor(private session: SessionService) { }

  ngOnInit() {
  //   this.session.isLoggedIn()
  //     .subscribe(
  //       (user) => this.user(user)
  //     );
  }

  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

}
