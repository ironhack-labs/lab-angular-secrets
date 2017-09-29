import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  user:object;

  constructor(private session: SessionService) { }
  this.user = this.auth.getUser();
  this.auth.getLoginEventEmitter()
      .subscribe( user => this.user=user );
  ngOnInit() {
    // this.username = this.session.user.name,
    // this.secret   = this.session.user.secret;
  }
}
