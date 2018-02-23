import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  constructor(public session: SessionService, public router: Router) {
    this.user = session.isLogged();
  }
  ngOnInit() {}

  logout(){
    this.session.logout();
    this.router.navigate(['login']);
  }
}
 
