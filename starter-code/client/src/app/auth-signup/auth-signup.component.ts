import { Component, OnInit } from "@angular/core";
import { SessionService } from "services/session.service";

@Component({
  selector: "app-auth-signup",
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.css"]
})
export class AuthSignupComponent implements OnInit {

    username:string ;
    password:string ;
    name: string;
    secret: string

    error:string

  constructor(private auth: SessionService) {}

  ngOnInit() {}

  signup() {
    this.auth.signup(this.username, this.password, this.name ,this.secret).subscribe();
  }
}
