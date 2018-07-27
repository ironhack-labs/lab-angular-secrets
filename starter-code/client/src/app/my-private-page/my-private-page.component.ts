import { Component, OnInit } from '@angular/core';
import { SessionService, User } from "./../session.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  user: object;

  constructor(private session: SessionService, public router: Router) { }

  ngOnInit() {
    this.session.loggedin().subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
