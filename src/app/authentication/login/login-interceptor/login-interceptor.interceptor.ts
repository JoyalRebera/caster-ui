import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptorInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request)
    let user: any = localStorage.getItem("userLog")
    let userData = JSON.parse(user)
    if (userData) {
      request = request.clone({
        setHeaders: {
          'Bearer': userData.token,
          'user-id': userData.id,
          'cb-id': userData.cb.id,
          'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
          'language': 'en'
        },
      });
    }
    return next.handle(request);
  }
}
