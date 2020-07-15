import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { TablesComponent } from './tables/tables.component';
import { PropertiesComponent } from './properties/properties.component';
import { FormulaireComponent } from './formulaire.component';
import { LoaderComponent } from '../loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  declarations: [
    LoaderComponent,
    FormulaireComponent,
    TablesComponent,
    PropertiesComponent
  ],
  exports:[FormulaireComponent]
})
export class FormulaireModule { }
