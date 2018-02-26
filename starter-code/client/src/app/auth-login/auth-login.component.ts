import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  username: string = "";
  password:string;
  myFormInfo:object;
  user:any;

  constructor(public session: SessionService) { 
  }

  ngOnInit() {
    this.session.login(this.username, this.password, null, null).subscribe(()=> {
       this.user = this.myFormInfo;
    })
  } 

  submitMyForm(myForm){
    console.log(myForm);
    let {username, password} = myForm.value;
    console.log(`El usuario es ${username} con el passwd ${password}`);
  }

}
