import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.page.html',
  styleUrls: ['./certificat.page.scss'],
})
export class CertificatPage implements OnInit {

  demande: any;
  document: any;
  libelle: string = 'Certificat de nationalité';

  constructor( private demandeservice : DemandeService ) { }

  ngOnInit() {
    
  }

  fileChang(event:any){
    this.document=event.target["files"][0]
      
  }

  postdemandecertificat(){
    this.demandeservice.AjouterDemande(this.document, this.libelle, localStorage.getItem('iduser')!).subscribe(data=>{
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
