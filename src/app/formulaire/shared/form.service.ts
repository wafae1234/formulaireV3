import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/form';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private host = "http://localhost:8081";
  //private fUrl="http://localhost:8081/form";

  private variable;


  constructor(private http: HttpClient) {}
  
    public envoyerformulaire(form : Form)
    { 
     return this.http.post<any>(this.host + '/form',form);
    }
    
   
    public getProperties(tableName: string, directory: string){
      return this.http.get(this.host + '/properties?'+ '&tableName=' + tableName+ '&directory=' + directory);
    }

    /*public envoyerchanges(table : Table)
    { 
     return this.http.post(this.host + '/properties/'+ table.tableName, table);
    }
     */   

    public testConnection(typebasededonne:string,lienserveur:string,databaseName:string,nomutilisateur:string,motdepasse:string)
    {
      this.variable={typebasededonne:typebasededonne,lienserveur:lienserveur,databaseName:databaseName,nomutilisateur:nomutilisateur,
        motdepasse:motdepasse};
      return this.http.post<any>(this.host +'/testconnection',this.variable);
    }
    reponseTest() 
    {
      return this.http.get(this.host +'/reponsetest');
    }

}
