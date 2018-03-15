import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AuthSignupComponent },
    { path: 'login', component: AuthLoginComponent},
    { path: 'private', component: MyPrivatePageComponent}
];