import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {

  username: String = '';
  secret: String = '';


  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.loggedIn()
    .subscribe(user => {
      this.secret = user.secret;
      this.username = user.username;
    });
  }

}
