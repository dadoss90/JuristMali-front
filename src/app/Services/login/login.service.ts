import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/Service/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService : ApiserviceService) {
    const utilisateur = localStorage.getItem('utilisateur');
    this._isLoggedIn$.next(!!utilisateur)
   }

  Login(email: string, password: string){
    console.log(email)
    console.log(password)

    return this.apiService.Login(email, password).subscribe(reponse=>{
      console.log(reponse)
      this._isLoggedIn$.next(true);
      localStorage.setItem('utilisateur',JSON.stringify(reponse));
      localStorage.setItem('iduser',reponse.id)
      if(reponse.accessToken){
        console.log(reponse)
        //this._isLoggedIn$.next(true)
      }
      
    },error=>{
      console.log(error)

    })
  }

}
