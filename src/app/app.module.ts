import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoPageComponent } from './no-page/no-page.component';
import { Router } from '@angular/router';
import { FormulaireModule } from './formulaire/formulaire.module';


@NgModule({
  declarations: [
    AppComponent,
    
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormulaireModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
