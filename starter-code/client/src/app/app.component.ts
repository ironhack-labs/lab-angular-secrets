import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';
import { User } from './shared/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:User;
  constructor(public session: SessionService, public router: Router) {
    this.user = session.isLogged();
  }
  ngOnInit() {}

  logout(){
    this.session.logout();
    this.router.navigate(['login']);
  }
}
