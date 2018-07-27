import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:object;

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.sessionService.logout().subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
