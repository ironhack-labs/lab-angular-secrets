import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ActivatedRoute } from '@angular/router';
import { SessionService } from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  constructor(public sessionService:SessionService){
   
    
  }

  
}

