import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  AjouterDemande(document:File, libelle : string, utilisateurs : string):Observable<any>{
    let data = new FormData();
    data.append("document", document);
    data.append("libelle", libelle);
    //data.append("idutilisateur", utilisateurs);
    return this.http.post<any>(`http://localhost:8081/demande/AjouteruneDemande/${utilisateurs}`, data)
  }
}
