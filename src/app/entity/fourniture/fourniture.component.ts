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
  })

  constructor(private fournservice : FournitureService) { this.fourn = new Fourniture }

  ngOnInit() {
  }

  getAllForm(){
    this.fournservice.findAllFourniture().subscribe(data=>{
      this.lstFourn = data;
    },
      error => {console.log(error);
    });
  }

  ajoutFourniture(){
    this.fournservice.ajoutFourniture(this.fourn).subscribe(data=>{
      console.log( "Fourniture ajouté avec succès !!" );
      window.location.reload();
    });
  }

}
