import { Component } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sessionService:SessionService){

  }

  ngOnInit(){

  };
}
