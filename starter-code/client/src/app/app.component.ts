import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userInfo: any;

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.sessionService.isLogged()
    .subscribe(
      (user: any) =>{
        if (user.isLoggedIn) {
          this.userInfo = user.userInfo
        }
        else {
          this.userInfo = null;
        }
      }
    )
  }


}
