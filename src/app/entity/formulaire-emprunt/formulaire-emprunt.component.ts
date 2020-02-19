import { Component, OnInit } from '@angular/core';
import { FormulaireEmprunt } from 'src/app/model/formulaire-emprunt';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fourniture } from 'src/app/model/fourniture';
import { FormulaireEmpruntService } from 'src/app/services/formulaire-emprunt.service';

@Component({
  selector: 'app-formulaire-emprunt',
  templateUrl: './formulaire-emprunt.component.html',
  styleUrls: ['./formulaire-emprunt.component.css']
})
export class FormulaireEmpruntComponent implements OnInit {

  formu : FormulaireEmprunt;
  lstFormu : FormulaireEmprunt[];
  idEmp : string;
  idFour : string;

  myForm = new FormGroup({
    idFormulaire : new FormControl('',Validators.required),
    typeFormulaire : new FormControl('',Validators.required),
    quantite : new FormControl('',Validators.required),
    nomFormulaire : new FormControl('',Validators.required),
    dateEmprunt : new FormControl('',Validators.required),
    dateRetour : new FormControl('',Validators.required),
    idEmp : new FormControl('',Validators.required),
    demandeValidee : new FormControl('',Validators.required),
    idFour : new FormControl('',Validators.required)
  })

  constructor(private formuservice : FormulaireEmpruntService) { this.formu = new FormulaireEmprunt }

  ngOnInit() {
    this.getAllForm();
  }

  getAllForm(){
    this.formuservice.findAllFormulaire().subscribe(data=>{
      this.lstFormu = data;
    },
      error => {console.log(error);
    });
  }

  ajoutFormulaire(){
    this.formuservice.ajoutFormulaire(this.formu,this.idEmp,this.idFour).subscribe(data=>{
      console.log( "Formulaire ajouté avec succès !!" );
      window.location.reload();
    });
  }

}
