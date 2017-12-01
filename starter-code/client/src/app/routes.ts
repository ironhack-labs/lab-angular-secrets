import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';

export const routes: Routes = [
    { path: '', component: AuthLoginComponent },
    { path: '**', redirectTo: '' }
];
