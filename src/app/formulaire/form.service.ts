import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private fUrl="http://localhost:8081/form";


  constructor(private http: HttpClient) {}
  
    public envoyerformulaire(form : Form): Observable<Form>
    { 
     return this.http.post<Form>(this.fUrl,form);
    }
    message() {
     return this.http.get<boolean>(this.fUrl);
    }

}
