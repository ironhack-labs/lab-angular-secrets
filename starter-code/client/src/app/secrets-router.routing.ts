import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";
import { MyPrivatePageComponent } from "./my-private-page/my-private-page.component";

const routes: Routes = [
  { path: "login", component: AuthLoginComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "private", component: MyPrivatePageComponent }
];

export const SecretsRouterRoutes = RouterModule.forRoot(routes);
