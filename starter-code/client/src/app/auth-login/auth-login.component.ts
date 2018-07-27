import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})

export class AuthLoginComponent implements OnInit {
  formData = {};
  constructor(private sesionService: SessionService) { }

  ngOnInit() {
  }

  sendData(knownUser){
    this.sesionService.login(knownUser).subscribe();
  }
}
