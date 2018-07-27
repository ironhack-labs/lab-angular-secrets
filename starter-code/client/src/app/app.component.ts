import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public sessionService: SessionService) { }
  logout(){
    this.sessionService.logout().subscribe();
  }

}
