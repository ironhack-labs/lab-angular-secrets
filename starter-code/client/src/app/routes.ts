import { Routes } from '@angular/router';
import { AuthSignupComponent } from 'app/auth-signup/auth-signup.component';
import { AuthLoginComponent } from 'app/auth-login/auth-login.component';
import { MyPrivatePageComponent } from 'app/my-private-page/my-private-page.component';

export const routes : Routes =[
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'signup', component : AuthSignupComponent},
    {path : 'login', component : AuthLoginComponent},
    {path : 'private',component: MyPrivatePageComponent}
]