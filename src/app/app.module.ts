import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './entity/employe/employe.component';
import { DocumentRHComponent } from './entity/document-rh/document-rh.component';
import { FournitureComponent } from './entity/fourniture/fourniture.component';
import { FormulaireEmpruntComponent } from './entity/formulaire-emprunt/formulaire-emprunt.component';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DocumentRHService } from './services/document-rh.service';
import { EmployeService } from './services/employe.service';
import { FormulaireEmpruntService } from './services/formulaire-emprunt.service';
import { FournitureService } from './services/fourniture.service';
import { ValidationFournitureComponent } from './validation-fourniture/validation-fourniture.component';
import { HomeComponent } from './home/home.component';
import { ContratComponent } from './contrat/contrat.component';
import { AttestationComponent } from './attestation/attestation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    DocumentRHComponent,
    FournitureComponent,
    FormulaireEmpruntComponent,
    ValidationFournitureComponent,
    HomeComponent,
    ContratComponent,
    AttestationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgbModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'})
  ],
  providers: [DocumentRHService,EmployeService,FormulaireEmpruntService,FournitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
