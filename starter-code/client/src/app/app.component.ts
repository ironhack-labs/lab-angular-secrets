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

  error:string;
  constructor(public session: SessionService, public router: Router) { }

  ngOnInit() { }

  btnlogin(){
    this.router.navigate(['/login'])
  }

  btnsignup(){
    this.router.navigate(['/signup'])

  }

  logout() {
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe();
  }
}


