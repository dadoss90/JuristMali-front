import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenseignementService {

  constructor(private http : HttpClient) { }
  
  getrenseignement():Observable<any> {

    return this.http.get<any> (`http://localhost:8081/renseignement/voir`)

  }
}
