import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
 selector: 'app-signup',
 templateUrl: './auth-signup.component.html',
 styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

 constructor(private sessionService:SessionService, private router:Router) { }

 ngOnInit() {
 }

 signup(username:string, password:string, name:string, secret: string){
   console.log("signup....");
   this.sessionService.signup(username,password,name, secret).subscribe( (user:any) =>{
     console.log(`WELCOME USER ${user.username}, register OK`);
     console.log(user);
     this.router.navigate(['/private']);
   });
 }
}