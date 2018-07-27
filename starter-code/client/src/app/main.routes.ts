import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { Routes } from "@angular/router";


export const routes: Routes = [
    {path: 'login', component: AuthLoginComponent},
    {path: 'signup', component: AuthSignupComponent},
    {path: 'private', component: MyPrivatePageComponent},
]