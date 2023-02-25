import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../Services/demande/demande.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-mes-services',
  templateUrl: './mes-services.page.html',
  styleUrls: ['./mes-services.page.scss'],
})
export class MesServicesPage implements OnInit {

  mesDemande:any=[]
  totaledemande : number=0
  user:any
  p:number=1
  constructor(private demandeService:DemandeService,private stockageService:StorageService) { }

  ngOnInit() {
    this.user = this.stockageService.getUser();
    console.log(this.user)
    this.demandeService.DemandeUtilisateurs(this.user.id).subscribe(res=>{

      this.mesDemande=res
      this.totaledemande = res.length
      console.log(this.mesDemande)
    })
  }

}
