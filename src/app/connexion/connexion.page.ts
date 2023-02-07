import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../Services/login/login.service';
import { SignupService } from '../Services/signup.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  //
  EmailLogin:string=''
  PasswordLogin:string='';
  
  constructor(
    private loginService:LoginService,
    private signService: SignupService,
    private router : Router
    
    ) {
      
     }

  ngOnInit() {
  }

  //
  Login() {
    this.loginService.Login(this.EmailLogin,this.PasswordLogin);
    this.router.navigate(['/tabs'])
  }


  form: any = {
    username: null,
    email: null,
    password: null,
    numerotelephone: null,
    nomcomplet:null,
    genre:null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  onSubmit(): void {
    console.log("bonjour");
    const { username, email, password, numerotelephone, nomcomplet, genre } = this.form;

    console.log(this.form);

    const donneesuser = [{
      "username":username,
      "nomcomplet":nomcomplet,
      "email":email,
      "password":password,
      "numerotelephone":numerotelephone,
      "genre":genre,
      "adresse":""
    }]

    console.log(donneesuser);
    
    this.signService.register(donneesuser).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }




}
