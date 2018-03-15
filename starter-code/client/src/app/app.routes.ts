import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
//import { MyPrivatePageComponent } from './components/auth/auth.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'signup', component: AuthSignupComponent},
    { path: 'login', component: AuthLoginComponent}
  //  { path: 'private', component: MyPrivatePageComponent}
];