import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  error:string;
  constructor(
    public SessionService: SessionService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(formInfo){
    this.SessionService.signup(formInfo.value).subscribe(
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
