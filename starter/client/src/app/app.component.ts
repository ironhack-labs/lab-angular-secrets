import { SessionService } from './shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
}
