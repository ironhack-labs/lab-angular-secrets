import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from 'services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error:string;
  constructor(private auth:SessionService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().catch(e => this.error = e).subscribe();
  }

}
