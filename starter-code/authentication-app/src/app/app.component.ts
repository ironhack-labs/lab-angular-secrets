import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular - Secrets';
  // user: any;
  constructor(public auth:SessionService) {
    // this.auth.getLoginEventEmitter()
    //     .subscribe( user => this.user=user );
  };

  ngOnInit() {
  }
}
