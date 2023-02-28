import { RouterModule } from '@angular/router';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { VerifyPasswordComponent } from './components/verify-password/verify-password.component';
import { appInitializer } from './helpers/app.initializer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    VerifyPasswordComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthService,
    {
      deps: [AuthService],
      provide: APP_INITIALIZER, 
      useFactory: appInitializer,
      multi: true, 
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
