import { Component, OnInit } from '@angular/core';
import { RenseignementService } from '../renseignement.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  renseignement: any;
  user: any;
  role: any;

  constructor(private servicerenseignement: RenseignementService, private stockageService:StorageService) { }

  ngOnInit() {
    this.user = this.stockageService.getUser();
    this.role = this.user.roles
    // console.log("Role: "+this.user.roles)


    this.servicerenseignement.getrenseignement().subscribe(data => {
      this.renseignement = data;

      console.log("les reseignement sont ", this.renseignement)

      for (let renseignements of this.renseignement) {

        console.log("les reseignement sont ", renseignements.videos)

      }
    })
  }

  logOut() {
    localStorage.removeItem("utilisateur");
    location.reload();
  }

}
