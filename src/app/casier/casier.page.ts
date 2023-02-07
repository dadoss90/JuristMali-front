import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../demande.service';
import { StorageService } from '../Services/stockage.service';

@Component({
  selector: 'app-casier',
  templateUrl: './casier.page.html',
  styleUrls: ['./casier.page.scss'],
})
export class CasierPage implements OnInit {
  iduser: any;
  demande: any;
  user: any;

  constructor( private demandeservice : DemandeService, private localstorage:StorageService) { }

  document: any;
  libelle: string = 'Casier judiciaire';
  ngOnInit() {

 this.user = this.localstorage.getUser()
 
 console.log( this.user)

   if(this.localstorage.isLoggedIn()){
    this.iduser = this.localstorage.getUser().id

    console.log("l'id de l'utilisateur est ", this.iduser)
   }
  }
  fileChang(event:any){
    this.document=event.target["files"][0]
      
  }
 postdemandecasier(){
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
