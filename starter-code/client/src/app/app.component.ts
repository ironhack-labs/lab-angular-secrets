import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(public sessionService:SessionService) {
    this.sessionService.userEvent.subscribe( user => {
      console.log("USER EVENT");
      if(user){
        this.title = `HOLA ${user.username}`;
      }else{
        this.title = "PLIZ LOGIARSE!";
      }
    })
   }

  ngOnInit() {
  }
}






