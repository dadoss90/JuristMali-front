import { Component, OnInit } from '@angular/core';
import { RenseignementService } from '../renseignement.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  renseignement: any;

  constructor(private servicerenseignement : RenseignementService) {}
  
ngOnInit() {
     this.servicerenseignement.getrenseignement().subscribe(data=>{
      this.renseignement = data;

      console.log("les reseignement sont ",this.renseignement )

      for(let renseignements of this.renseignement){

        console.log("les reseignement sont ",renseignements.videos )

      }
         })
}

logOut() {
  localStorage.removeItem("utilisateur");
  location.reload();
}

}
