import { Component, OnInit } from '@angular/core';
import { finalize, map } from "rxjs/operators"
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from './form.service';
import { Form } from './form';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  title = 'fromulaire du générateur';
  form : Form;
  generateurForm: FormGroup; 
  submitted=false;
  loading = false;
  display='none';

  constructor(private formbuilder:FormBuilder,public service:FormService){

  }

  ngOnInit(){

  this.generateurForm = this.formbuilder.group({
    
    diroctoryproject: ['', Validators.required],
    nomprojet: ['sampleApp', Validators.required],
    nompackage: ['com.mycompany.myapp', Validators.required],
    typebasededonne: ['MYSQL', Validators.required],
    lienserveur: ['localhost:3306', Validators.required],
    port: ['8080', Validators.required],
    databaseName: ['mydb', Validators.required],
    nomutilisateur: ['root', Validators.required],
    motdepasseutilisateur:[null],
    acceptation: [false, Validators.requiredTrue]

  });

  this.form = {
    diroctoryproject: '',
    nomprojet: '',
    nompackage: '',
    typebasededonne: '',
    lienserveur:'',
    port: '',
    databaseName: '',
    nomutilisateur: '',
    motdepasseutilisateur :'',

  }

  }

  
  onSubmit() {
    this.mapFormValuesToFormModel();

    this.submitted = true;
    if (this.generateurForm.valid){
      this.display='block';
      this.loading = true;
      this.service.envoyerformulaire(this.form).subscribe(
    );
    }

    else {
          // stop here if form is invalid
      return;
    } 
}


 // getter pour un accès facile aux champs de formulaire
 get f() { return this.generateurForm.controls; }
 
mapFormValuesToFormModel(){
  this.form.diroctoryproject = this.f.diroctoryproject.value;
  this.form.nomprojet = this.f.nomprojet.value;
  this.form.nompackage = this.f.nompackage.value;
  this.form.port = this.f.port.value;
  this.form.typebasededonne = this.f.typebasededonne.value;
  this.form.lienserveur = this.f.lienserveur.value;
  this.form.databaseName = this.f.databaseName.value;
  this.form.motdepasseutilisateur = this.f.motdepasseutilisateur.value;
}



onReset() {
    this.submitted = false;
    this.loading = false;
    this.generateurForm.reset();
}


}
