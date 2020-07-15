import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from './shared/form.service';
import { Form } from './models/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  title = 'fromulaire du générateur';
  form : Form = new Form();
  generateurForm: FormGroup; 
  submitted=false;
  loading = false;
  display='none';
  showForm=false;
  testCnx=false;
  tables: [];
  projectDirectory='';

  reponseC :any;
  cars: Array<any>;
  reponses : any;
  variable :any ="NN";

//public static PATH_MODEL = '';

  constructor(private router: Router,private formbuilder:FormBuilder,public service:FormService){

  }

  ngOnInit(){

  this.generateurForm = this.formbuilder.group({
    
    diroctoryproject: ['', Validators.required],
    nomprojet: ['sampleApp', Validators.required],
    nompackage: ['com.mycompany.myapp', Validators.required],
    typebasededonne: ['MYSQL', Validators.required],
    lienserveur: ['localhost:3306', Validators.required],
    port: ['8080', Validators.required],
    databaseName: ['', Validators.required],
    nomutilisateur: ['root', Validators.required],
    motdepasseutilisateur:[null],

    //acceptation: [false, Validators.requiredTrue]

  });
}

  onSubmit() {
    this.mapFormValuesToFormModel();
    this.projectDirectory=this.f.diroctoryproject.value;
    this.submitted = true;
    if (this.generateurForm.valid){
      this.display='block';
      this.loading = true;
      this.service.envoyerformulaire(this.form).subscribe(data => {
        console.log(data);
        this.tables = data;
      if(data){
        console.log('Application generated successfully !');
        this.display='none';
        this.loading = false;
        this.showForm=true;
        console.log(this.tables);
      } else{
        console.log('Generation failed !');      
      } 
    }, error => {
      this.router.navigateByUrl('/**');
    });
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
  this.form.nomutilisateur = this.f.nomutilisateur.value;
  this.form.motdepasseutilisateur = this.f.motdepasseutilisateur.value;
}

onTest()
{
  this.service.testConnection(this.f.typebasededonne.value, this.f.lienserveur.value,this.f.databaseName.value,
    this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value).
    subscribe((responsee: any) => {
      this.variable = responsee.repo1;
      if(responsee){
        this.testCnx=true;
      }
    }
    );
  
}


onReset() {
    this.submitted = false;
    this.loading = false;
    this.generateurForm.reset();
}

}
