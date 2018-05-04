import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sessionService: SessionService, public router: Router) {
   
   }

  ngOnInit() {
  }

  logOut(){
    this.sessionService.logout().subscribe( () => console.log("logged out"))
     this.router.navigate(['/'])
  }
}
