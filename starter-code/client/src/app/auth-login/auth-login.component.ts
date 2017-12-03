import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  error:string;
  constructor(public session: SessionService, public router:Router ) { }

  ngOnInit() {
  }

  onSubmitLogin(formInfo){
    this.session.login(formInfo.value).subscribe(
      (user) => {
        formInfo.reset();
        console.log("ENTRE")
        this.router.navigate(['private']);
      },
      (error) => {
        this.error = error.message;
      }
    )

  }
}
