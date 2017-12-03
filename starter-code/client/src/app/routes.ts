import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component'

export const routes: Routes = [
    //{ path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: AuthLoginComponent },
    { path: 'signup', component:  AuthSignupComponent },
    { path: 'private', component:  MyPrivatePageComponent },
    // { path: '**', redirectTo: '' }
];
