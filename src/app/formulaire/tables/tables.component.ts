import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../shared/form.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  property: any;
  table: any;
  @Input() tables: any;
  @Input() projectDirectory: any;
  selectedId: string;
  //tables: any;
  properties: any;
  //tablesForm: FormGroup; 
  submitted=false;
 
  constructor(private route: ActivatedRoute, public service:FormService) { }

  ngOnInit() {
    console.log(this.tables);
     this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        return this.selectedId = params.get('table');
        console.log(this.table);
      })
    );

    // this.router.navigate(['tableProperties/${this.table}']).then( (e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }


    
    
    //this.getTables();
    //this.getProperties();
 

  //   this.tablesForm = this.formbuilder.group({   
  //     NewNameFrensh: ['', Validators.required],
  //     NewNameEnglish: ['', Validators.required]
  //   })
  // }

// getTables(){
//   this.service.getTables()
//   .subscribe(tables => (this.tables = tables));
// }

// getProperties(){
//   this.service.getProperties(this.tables, this.property)
//   .subscribe(data => {
//     console.log(data);
//     this.contacts = data['content'];
//     this.pages = new Array(data['totalPages']);
//   }, error => {
//     this.router.navigateByUrl('/**');
//   });
// }


  //get f() { return this.tablesForm.controls; }

  /*
  onChange() {
    this.mapFormValuesToFormModel();
    this.submitted = true;
    if (this.tablesForm.valid){
      this.service.envoyerchanges(this.table).subscribe(result =>{
      if(result == true){
        console.log('Changes submitted !');
      } else{
        console.log('Ganges failed !');
      }
    });
    }

    else {
          // stop here if form is invalid
      return;
    } 
  }
  */

  // mapFormValuesToFormModel(){
  //   this.property.NewNameFrensh = this.f.NewNameFrensh.value;
  //   this.property.NewNameEnglish = this.f.NewNameEnglish.value;
  // }




}
