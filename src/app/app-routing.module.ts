import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentRHComponent } from './entity/document-rh/document-rh.component';


const routes: Routes = [
  {path:'documentrh', component:DocumentRHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
