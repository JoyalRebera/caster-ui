import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl=environment.baseUrl

  constructor(private http:HttpClient) { }
 
  // dashboard statistics
  getDashboardStatistics():Observable<any>{
    return this.http.get(this.baseUrl+`authentications/dashboard/statistics/`)
  }
  
  // filter table
  getDashboardTableFilter():Observable<any>{ 
    return this.http.get(this.baseUrl+`products/trade-names/`)
  }

  // dashboard  table
  getDashboardTableElement(params:any):Observable<any>{
    let tableElements=new HttpParams({fromObject:params})
    // console.log({params:tableElements})
    return this.http.get(this.baseUrl+`transactions/external/list/`,{params:tableElements})
  }


}
