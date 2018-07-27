import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";
  user: string;

  constructor(private sessionService: SessionService, private aR: ActivatedRoute) { }

  ngOnInit() {
    this.sessionService.isLogged().subscribe(user => 
      this.username = user
    )

    }
  }
