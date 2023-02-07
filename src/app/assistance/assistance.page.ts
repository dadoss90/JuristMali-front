import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  soumettre() {
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
