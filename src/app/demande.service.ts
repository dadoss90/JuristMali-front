import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  AjouterDemandeCertificat(document: File, nomDemandeur: string, prenomDemandeur: string, dateDemandeur: string, lieuNaissance: string, pereDemandeur: string, mereDemandeur: string, professionDemandeur: string, situationDemandeur: string, domicileDemandeur: string, idUtilisateurs: number): Observable<any> {
    let data = new FormData();
    const demande = [{
      "libelle": "certificat",
      "nomDemandeur": nomDemandeur,
      "prenomDemandeur": prenomDemandeur,
      "dateDemandeur": dateDemandeur,
      "lieuNaissance": lieuNaissance,
      "pereDemandeur": pereDemandeur,
      "mereDemandeur": mereDemandeur,
      "professionDemandeur": professionDemandeur,
      "situationDemandeur": situationDemandeur,
      "domicileDemandeur": domicileDemandeur
    }];
    console.log(demande)
    data.append("document", document);
    data.append("demande", JSON.stringify(demande).slice(1,JSON.stringify(demande).lastIndexOf(']')));
    //data.append("idutilisateur", utilisateurs);
    return this.http.post<any>(`http://localhost:8081/demande/AjouteruneDemandeCertificat/${idUtilisateurs}`, data)
  }

  AjouterDemande(document:File, libelle : string, utilisateurs : string):Observable<any>{
    let data = new FormData();
    data.append("document", document);
    data.append("libelle", libelle);
    //data.append("idutilisateur", utilisateurs);
    return this.http.post<any>(`http://localhost:8081/demande/AjouteruneDemande/${utilisateurs}`, data)
  }
}
