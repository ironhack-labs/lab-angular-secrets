import { Component, OnInit } from "@angular/core";
import { SessionService } from "services/session.service";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"]
})
export class AuthLoginComponent implements OnInit {

    username:string ;
    password:string ;

    error:string

  constructor(private auth: SessionService) {}

  ngOnInit() {}

  signup() {
    this.auth.login(this.username, this.password).subscribe();
  }
}
