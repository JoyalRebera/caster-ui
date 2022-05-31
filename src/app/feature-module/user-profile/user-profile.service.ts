import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

baseUrl=environment.baseUrl

constructor(private http:HttpClient) { }

getUserProfile(id:any):Observable<any>{
  return this.http.get(this.baseUrl + `authentications/staff/`+id);
}

}
