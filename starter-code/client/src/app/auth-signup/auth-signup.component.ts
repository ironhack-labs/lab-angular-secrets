import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "../session.service"

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
    user: any;
    formInfo = {
      username: '',
      password: ''
    };
    error: string;
    privateData: any = '';

    constructor(private session: SessionService) { }

    ngOnInit() {

    }

    signup() {
      console.log("entrando a la llamada del componente")
      this.session.signup(this.formInfo)
        .subscribe(
          (user) => console.log(user),
          (err) => console.log(err)

        );   console.log(this.user);
    }

  }
