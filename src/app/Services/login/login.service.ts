import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/Service/apiservice.service';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
 
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }




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

      this.saveUser(reponse)
      this.saveToken(reponse.accessToken)



      // localStorage.setItem('utilisateur',JSON.stringify(reponse));
      // localStorage.setItem('iduser',reponse.id)
      if(reponse.accessToken){
        console.log(reponse)
        //this._isLoggedIn$.next(true)
      }
      
    },error=>{
      console.log(error)

    })
  }

}
