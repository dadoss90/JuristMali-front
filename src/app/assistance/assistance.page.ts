import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../Services/demande/demande.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  nom:any=''
  prenom:any=''
  numero:any=''
  adresse:any=''
  age:any=''
  profession:any=''
  sexe:any=''
  email:any=''
  description:any=''
  typeDemande:any

  document:any
  user:any
  constructor(private demandeService: DemandeService,private stockageService:StorageService) { }

  ngOnInit() {
  }

  fileChang(event:any){
    this.user = this.stockageService.getUser();
    this.document=event.target["files"][0]   
  }

  soumettre() {
    const user=[{
      'username':'',
      'nomcomplet':this.nom + ' '+this.prenom,
      'email':this.email,
      'adresse':this.adresse,
      'password':'',
      'numerotelephone':this.numero,
      'roles':[{
        'id':2
      }],
      'genre':this.sexe,
    }]
    console.log(user)
    console.log(this.typeDemande)

    this.demandeService.Enregistrer(user,this.description,this.typeDemande,this.document,this.user.id).subscribe({
      next: data => {
        console.log(data);
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          heightAuto: false,
          title: 'Demande envoyée avec succès !',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: err => {
        console.log(err);
      }
    });

    
  }

}
