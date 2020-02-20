import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentRHComponent } from './entity/document-rh/document-rh.component';
import { EmployeComponent } from './entity/employe/employe.component';
import { FormulaireEmpruntComponent } from './entity/formulaire-emprunt/formulaire-emprunt.component';
import { FournitureComponent } from './entity/fourniture/fourniture.component';
import { ValidationFournitureComponent } from './validation-fourniture/validation-fourniture.component';


const routes: Routes = [
  {path:'documentrh', component:DocumentRHComponent},
  {path:'employe', component:EmployeComponent},
  {path:'formulaire', component:FormulaireEmpruntComponent},
  {path:'fourniture', component:FournitureComponent},
  {path:'validation', component:ValidationFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
