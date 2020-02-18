import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './entity/employe/employe.component';
import { DocumentRHComponent } from './entity/document-rh/document-rh.component';
import { FournitureComponent } from './entity/fourniture/fourniture.component';
import { FormulaireEmpruntComponent } from './entity/formulaire-emprunt/formulaire-emprunt.component';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
