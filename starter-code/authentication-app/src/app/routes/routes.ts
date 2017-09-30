import { Routes } from '@angular/router';
import { SessionService } from "../services/session.service";

import { AuthLoginComponent } from 'app/auth-login/auth-login.component';
import { AuthSignupComponent } from 'app/auth-signup/auth-signup.component'
import { MyPrivatePageComponent } from 'app/my-private-page/my-private-page.component'

export const routes: Routes = [
  { path: 'signup', component: AuthSignupComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'private', component: MyPrivatePageComponent },
  { path: '**', redirectTo: '' }
];
