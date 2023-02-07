import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TribunauxService {

  constructor(private http:HttpClient) { }
  

  gettrib():Observable<Object>{
    return this.http.get('http://localhost:8081/tribunal/voir')
  }
}
