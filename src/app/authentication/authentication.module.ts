import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRouting } from './authentication-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginInterceptorInterceptor } from './login/login-interceptor/login-interceptor.interceptor';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRouting,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
     useClass: LoginInterceptorInterceptor,multi:true
  }]
})
export class AuthenticationModule { }
