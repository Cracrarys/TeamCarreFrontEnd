import { Component, OnInit } from '@angular/core';
import { FormulaireEmprunt } from '../model/formulaire-emprunt';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fourniture } from '../model/fourniture';
import { FormulaireEmpruntService } from '../services/formulaire-emprunt.service';

@Component({
  selector: 'app-validation-fourniture',
  templateUrl: './validation-fourniture.component.html',
  styleUrls: ['./validation-fourniture.component.css']
})
export class ValidationFournitureComponent implements OnInit {

  formu : FormulaireEmprunt;
  lstFormu : FormulaireEmprunt[];
  fourn : Fourniture;
  id : string;
  idEmp:number;
  idFour:number;

  myForm = new FormGroup({
    demandeValidee : new FormControl('',Validators.required),
    idEmp : new FormControl('',Validators.required),
    idFour : new FormControl('',Validators.required)
  });

  constructor(private formser : FormulaireEmpruntService) { this.formu = new FormulaireEmprunt(); }

  ngOnInit() {
    this.getAllFournitureNOK();
  }

  getAllFournitureNOK(){
    this.formser.findAllFormulaireNOK().subscribe(data=>{
      this.lstFormu = data;
      console.log( "Fournitures récupérées avec succès !!" );
    },
      error => {console.log(error);
    });
  }

  ajoutFormulaire() : void{
    this.formser.ajoutFormulaire(this.formu,this.idEmp,this.idFour).subscribe(data=>{
      console.log( "Formulaire ajouté avec succès !!" );
      window.location.reload();
    });
  }

}
