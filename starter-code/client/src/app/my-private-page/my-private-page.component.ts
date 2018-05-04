import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";

  constructor(public session: SessionService) { }

  ngOnInit() {
  }
}
