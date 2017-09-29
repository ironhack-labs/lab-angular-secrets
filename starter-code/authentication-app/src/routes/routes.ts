 import { Routes } from '@angular/router';
 //import {IsLoggedInService} from './services/session.service';
 import {AuthLoginComponent} from 'app/auth-login/auth-login.component';
 import {MyPrivatePageComponent} from 'app/my-private-page/my-private-page.component'
//
import {HomeComponent} from 'app/home/home.component';
 import {AuthSignupComponent} from 'app/auth-signup/auth-signup.component'
// import {LoginformComponent} from ‘./loginform/loginform.component’;
//import {IsLoggedInService} from ‘./services/isLoggedIn.canactivate.service’;

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'private', component: MyPrivatePageComponent },
  { path: '**', redirectTo: '' }
];
