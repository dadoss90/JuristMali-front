import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  Login(email:String, password:String):Observable<any>{

    var body={
      "username":email,
      "password":password
    }
    return this.http.post(`http://localhost:8081/api/auth/signin`,body)

  }

}
