import { Component, OnInit } from '@angular/core';
import { TribunauxService } from '../Service/tribunaux.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  constructor( private service: TribunauxService) {}

  // ngOnInit(): void {

  //   this.formateurserv.voirFormateurauditeur().subscribe(data=>{
  //     this.auditeur=data;
  //     console.log(this.auditeur);
  //   });
  //   this.idutilisateur = JSON.parse(localStorage.getItem("auth-user")!).id;
  //   console.log(localStorage.getItem("auth-user"))
  // }



}
