import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { DocumentRHComponent } from './document-rh/document-rh.component';
import { FournitureComponent } from './fourniture/fourniture.component';
import { FormulaireEmpruntComponent } from './formulaire-emprunt/formulaire-emprunt.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    DocumentRHComponent,
    FournitureComponent,
    FormulaireEmpruntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
