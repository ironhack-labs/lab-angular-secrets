import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: AuthLoginComponent},
    {path: 'signup', component: AuthSignupComponent},
    {path: 'private', component: MyPrivatePageComponent}
]