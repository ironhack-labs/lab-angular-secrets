import { Routes } from '@angular/router';

import {AuthLoginComponent} from './auth-login/auth-login.component';
import {AuthSignupComponent} from './auth-signup/auth-signup.component';
import {MyPrivatePageComponent} from './my-private-page/my-private-page.component';
// import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: 'login', component: AuthLoginComponent },
    { path: 'signup',
      component: AuthSignupComponent},
    //{ path: 'signup',
    //  component: AuthSignupComponent,
    //  canActivate: [ IsLoggedInService ]  },
    { path: 'private',
      component: MyPrivatePageComponent,
    },
    { path: '**', redirectTo: '' }
];
