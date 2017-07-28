import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.login('Fran B', '5678')
      .subscribe(e => console.log(e))
  }
}
