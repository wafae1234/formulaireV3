import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/formulaire', pathMatch: 'full' },
  { path: '**', component: NoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
