import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  register(donneesuser:any): Observable<any> {

    const data:FormData=new FormData();

    data.append('donneesuser', JSON.stringify(donneesuser).slice(1,JSON.stringify(donneesuser).lastIndexOf(']')));

    console.log(data);



    return this.http.post(
      AUTH_API + 'signup',
       data
    );
  }

}
