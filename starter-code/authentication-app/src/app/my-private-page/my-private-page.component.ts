import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  
  user:Object

  constructor(private session: AuthService) { }

  ngOnInit() {
    this.user = this.session.getUser()
  }
}
