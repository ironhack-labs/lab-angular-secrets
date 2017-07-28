import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

export const routes: Routes = [
    { path: 'signup', component: AuthSignupComponent },
    { path: 'login', component: AuthLoginComponent },
    { path: 'private', component: MyPrivatePageComponent },
    { path: '**', redirectTo: '' }
];
