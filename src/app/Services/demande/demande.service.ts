import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  Enregistrer(user:any,description:any,type:any,document:any,id:any):Observable<Object>{
    const data:FormData=new FormData();

    data.append('idutilisateur', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    data.append('document',document)
    data.append('description',description)
    data.append('type',type)
    console.log(data);

    
    return this.http.post(`http://localhost:8081/demande/AjouteruneDemande2/${id}`,data)

  }

  DemandeUtilisateurs(idUser:any):Observable<any>{
    return this.http.get(`http://localhost:8081/demande/get/${idUser}`)
  }
}
