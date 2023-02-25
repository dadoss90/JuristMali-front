import { Component, OnInit } from '@angular/core';
import { RenseignementService } from '../renseignement.service';

@Component({
  selector: 'app-me-renseigner',
  templateUrl: './me-renseigner.page.html',
  styleUrls: ['./me-renseigner.page.scss'],
})
export class MeRenseignerPage implements OnInit {
  renseignement: any;
  // renseignements:any
  constructor(private servicerenseignement: RenseignementService) { }

  ngOnInit() {
    this.servicerenseignement.getrenseignement().subscribe(data => {
      this.renseignement = data;

      console.log("les reseignement sont avant for ", this.renseignement.videos)

      for (let renseignements of this.renseignement) {
           
        console.log("les reseignement sont ", renseignements.videos )

      }
    })
  }

}
