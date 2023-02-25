import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../demande.service';
import { Demande } from '../Model/demande';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.page.html',
  styleUrls: ['./certificat.page.scss'],
})
export class CertificatPage implements OnInit {

  demande: Demande = new Demande;
  document: any;
  libelle: string = 'Certificat de nationalité';
  idUser!: any;

  constructor( private demandeservice : DemandeService ) { }

  ngOnInit() {
    this.idUser=localStorage.getItem('iduser')
    console.log(this.idUser)
  }

  fileChang(event:any){
    this.document=event.target["files"][0]
      
  }

  postdemandecertificat(){
    this.demandeservice.AjouterDemandeCertificat(this.document, this.demande.nomDemandeur, this.demande.prenomDemandeur, this.demande.dateDemandeur, this.demande.lieuNaissance, this.demande.pereDemandeur, this.demande.mereDemandeur, this.demande.professionDemandeur, this.demande.situationDemandeur, this.demande.domicileDemandeur,this.idUser  ).subscribe(data=>{
      this.demande = data;
      console.log(data)
      
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      heightAuto: false,
      title: 'Demande envoyée avec succès !',
      showConfirmButton: false,
      timer: 1500
    })
  
   }

}
