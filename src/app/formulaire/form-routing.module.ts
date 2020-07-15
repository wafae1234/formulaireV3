import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { PropertiesComponent } from './properties/properties.component';
import { FormulaireComponent } from './formulaire.component';

const formRoutes: Routes = [
{ path: 'tables',  component: TablesComponent },
{ path: 'tableProperties/:table', component: PropertiesComponent },
{ path: 'formulaire',  component: FormulaireComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormRoutingModule { }
