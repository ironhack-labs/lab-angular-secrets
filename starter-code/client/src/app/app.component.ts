import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe((user) => this.user = user);
    this.session.userJustLoggedIn$.subscribe((user) => this.user = user);
  }

  logout() {
    this.session.logout()
      .subscribe(
        ()=>this.user = null,
      )
  }

}
