import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private fUrl="http://localhost:8080/form";
  private variable;

  constructor(private http: HttpClient) {}
    public envoyerformulaire(diroctoryproject:string,nomprojet:string,nompackage:string,typebasededonne:string,lienserveur:string,port:string,databaseName:string,nomutilisateur:string,motdepasse:string)
    { 
      this.variable={diroctoryproject:diroctoryproject,nomprjet:nomprojet,nompackage:nompackage,typebasededonne:typebasededonne,lienserveur:lienserveur,port:port,databaseName:databaseName,nomutilisateur:nomutilisateur,motdepasse:motdepasse};
      console.log(this.variable);
      return this.http.post<any>(this.fUrl,this.variable);
    }
}
