import { Routes, RouterModule } from '@angular/router';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component'
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

export const routes: Routes = [
  {path: 'signup', component: AuthSignupComponent},
  {path: 'login', component: AuthLoginComponent},
];

