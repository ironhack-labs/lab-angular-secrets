import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    // this.username = this.session
    console.log(this.session)
    this.session.secret().subscribe((res) => {
       this.secret = res.message
    })
  }
}
