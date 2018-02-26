import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    let {username, password, name, secret} = form.value;
    console.log(`El usuario es ${username} con el passwd ${password} con el nombre ${name} y su secreto no tan secreto ${secret}`);
  }

}
