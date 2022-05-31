import { environment } from '../../../environments/environment';
import { LoginInterface } from '../login/loginInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthenticatonService {

  constructor(private http: HttpClient) { }
  baseurl = environment.baseUrl

  loginUser(data: any) {
    return this.http.post(this.baseurl+`authentications/login/`,data)
  }

}
