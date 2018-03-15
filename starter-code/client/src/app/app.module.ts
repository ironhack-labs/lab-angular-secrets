import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from './shared/services/session.service';

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './components/my-private-page/my-private-page.component';
import { UserComponent } from './components/user/user.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    UserComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
