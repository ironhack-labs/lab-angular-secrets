import { AuthSignupComponent } from "./app/auth-signup/auth-signup.component";
import { AuthLoginComponent } from "./app/auth-login/auth-login.component";
import { MyPrivatePageComponent } from "./app/my-private-page/my-private-page.component";
import { AppComponent } from "./app/app.component";
import { Routes } from "../node_modules/@angular/router";


export const routes:Routes=[
    
    {path:"signup",component:AuthSignupComponent},
    {path:"login",component:AuthLoginComponent},
    {path:"private",component:MyPrivatePageComponent},

]