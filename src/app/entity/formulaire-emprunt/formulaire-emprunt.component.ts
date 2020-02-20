import { Component, OnInit } from '@angular/core';
import { FormulaireEmprunt } from 'src/app/model/formulaire-emprunt';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fourniture } from 'src/app/model/fourniture';
import { FormulaireEmpruntService } from 'src/app/services/formulaire-emprunt.service';
import { Employe } from 'src/app/model/employe';
import { FournitureService } from 'src/app/services/fourniture.service';
import { EmployeService } from 'src/app/services/employe.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulaire-emprunt',
  templateUrl: './formulaire-emprunt.component.html',
  styleUrls: ['./formulaire-emprunt.component.css']
})
export class FormulaireEmpruntComponent implements OnInit {

  formu : FormulaireEmprunt;
  lstFormu : FormulaireEmprunt[];
  lstFormuNOK : FormulaireEmprunt[];
  idEmp : number;
  idFour : number;
  employe : Employe;
  lstEmpl : Employe[];
  fourniture : Fourniture;
  lstFour : Fourniture[];
  nomEmp:string;
  nomFourn:string;

  myForm = new FormGroup({
    idFormulaire : new FormControl('',Validators.required),
    typeFormulaire : new FormControl('',Validators.required),
    quantite : new FormControl('',Validators.required),
    nomFormulaire : new FormControl('',Validators.required),
    dateEmprunt : new FormControl('',Validators.required),
    dateRetour : new FormControl('',Validators.required),
    idEmp : new FormControl('',Validators.required),
    idFour : new FormControl('',Validators.required)
  });

  myFormDelete = new FormGroup({
    idFormulaire : new FormControl('',Validators.required)
  });

  constructor(private formuservice : FormulaireEmpruntService, private fournser : FournitureService,
    private empser : EmployeService){ this.formu = new FormulaireEmprunt }

  ngOnInit() {
    this.getAllForm();
    this.getAllEmploye();
    this.getAllFourniture();
    this.getAllFormNOK();
  }

  getAllForm(){
    this.formuservice.findAllFormulaire().subscribe(data=>{
      this.lstFormu = data;
      console.log( "Formulaires récupérés avec succès !!" );
    },
      error => {console.log(error);
    });
  }
  getAllFormNOK(){
    this.formuservice.findAllFormulaireNOK().subscribe(data=>{
      this.lstFormuNOK = data;
      console.log( "Formulaires récupérés avec succès !!" );
    },
      error => {console.log(error);
    });
  }

  getAllEmploye(){
    this.empser.getAllEmployes().subscribe(data=>{
      this.lstEmpl = data;
      console.log( "Employés récupérés avec succès !!" );
    },
      error => {console.log(error);
    });
  }

  getAllFourniture(){
    this.fournser.findAllFourniture().subscribe(data=>{
      this.lstFour = data;
      console.log( "Fournitures récupérées avec succès !!" );
    },
      error => {console.log(error);
    });
  }

  getFormById(){
    this.formuservice.findFormulaire(this.formu.idFormulaire).subscribe(data=>{
      this.formu = data;
      this.nomEmp = this.formu.employe.nomEmploye;
      this.nomFourn = this.formu.fourniture.nomFourniture;
      console.log( "Formulaire récupéré avec succès !!" );
    });
  }

  ajoutFormulaire() : void{
    this.formuservice.ajoutFormulaire(this.formu,this.idEmp,this.idFour).subscribe(data=>{
      console.log( "Formulaire ajouté avec succès !!" );
      window.location.reload();
    });
  }

  supprimerFormulaire() : void{
    this.formuservice.suppFormulaire(this.formu.idFormulaire).subscribe(data=>{
      console.log( "Formulaire supprimé avec succès !!" );
      window.location.reload();
    });
  }

}
