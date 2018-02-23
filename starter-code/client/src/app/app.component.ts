import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from 'services/Session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error:string;
  constructor(public session:SessionService) {
    
   }
  
  ngOnInit() {
    this.session.isLoggedIn().subscribe()
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
