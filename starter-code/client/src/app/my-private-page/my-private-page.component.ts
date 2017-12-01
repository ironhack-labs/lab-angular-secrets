import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";

  //userInfo: any;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    /*console.log('HERE!');
    this.sessionService.isLogged()
    .subscribe(
      (user: any) =>{
        if (user.isLoggedIn) {
          this.userInfo = user.userInfo
          console.log(this.userInfo);
        }
        else {
          this.userInfo = null;
        }
      }
    )*/
    this.username = this.sessionService.username;
    this.secret = this.sessionService.secret;
  }

}
