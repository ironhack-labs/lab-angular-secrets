import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./services/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username:string;
  password:string;
  error:string;
  
  constructor(public session:SessionService) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
  }

  signup(){
    this.session.signup(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
