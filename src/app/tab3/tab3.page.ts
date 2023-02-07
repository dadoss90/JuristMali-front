import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
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
