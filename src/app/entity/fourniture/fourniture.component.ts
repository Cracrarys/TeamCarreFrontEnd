import { Component, OnInit } from '@angular/core';
import { Fourniture } from 'src/app/model/fourniture';
import { FournitureService } from 'src/app/services/fourniture.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourniture',
  templateUrl: './fourniture.component.html',
  styleUrls: ['./fourniture.component.css']
})
export class FournitureComponent implements OnInit {

  fourn : Fourniture;
  lstFourn : Fourniture[];

  myForm = new FormGroup({
    idFourniture : new FormControl('',Validators.required),
    nomFourniture : new FormControl('',Validators.required),
    quantiteDisponible : new FormControl('',Validators.required),
    quantiteTotale : new FormControl('',Validators.required),
    typeFourniture : new FormControl('',Validators.required),
    consommable : new FormControl('',Validators.required)
  });

  myFormDelete = new FormGroup({
    idFourniture : new FormControl('',Validators.required)
  });

  constructor(private fournservice : FournitureService) { this.fourn = new Fourniture(); }

  ngOnInit() {
    this.getAllFourn();
  }

  getAllFourn(){
    this.fournservice.findAllFourniture().subscribe(data=>{
      this.lstFourn = data;
      console.log("Got all fournitures !")
    },
      error => {console.log(error);
    });
  }

  getFournId(){
    this.fournservice.findFourniture(this.fourn.idFourniture).subscribe(data=>{
      this.fourn = data;
      console.log("Got it !")
    },
      error => {console.log(error);
    });
  }

  ajoutFourniture() : void {
    this.fournservice.ajoutFourniture(this.fourn).subscribe(data=>{
      console.log( "Fourniture ajouté avec succès !!" );
      window.location.reload();
    });
  }

  supprimerFourniture():void{
    this.fournservice.suppFourniture(this.fourn.idFourniture).subscribe(data=>{
      console.log("Fourniture supprimée avec succès !")
      window.location.reload();
    });
  }

}
