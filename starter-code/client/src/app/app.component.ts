import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';
import { User } from './shared/models/user.model'
import { SessionService } from './session.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:User;
  constructor(private session: SessionService) {
    this.user = session.isLogged();
   }

  ngOnInit() {
  }
}
