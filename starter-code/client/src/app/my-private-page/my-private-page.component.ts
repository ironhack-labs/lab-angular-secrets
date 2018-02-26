import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";
  name:string = "";
  formInfo:object;
  user:any;
  password:string;
  constructor(public session: SessionService) { 
  }

  ngOnInit() {
    this.session.signup(this.username, this.secret, this.name, this.password).subscribe(()=> {
       this.user = this.formInfo;
    })
  } 

}
