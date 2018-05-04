import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1 style='text-align:center'>Secrets</h1>
              <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(public sessionService:SessionService) { }

  ngOnInit() {
  }
}
