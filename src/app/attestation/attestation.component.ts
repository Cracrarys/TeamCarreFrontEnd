import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Employe } from '../model/employe';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {
  employe: Employe;
  lstEmp: Employe[];
  dateJour : number;

  constructor(private employeservice: EmployeService) { this.employe = new Employe }

  ngOnInit() {
    this.getAllEmp();
  }

  ajoutEmploye() : void{
    this.employeservice.ajoutEmploye(this.employe).subscribe(data=>{
      console.log( "Employé ajouté avec succès !!" );
      window.location.reload();
    });
  }

  supprimerEmploye():void{
    this.employeservice.supprimerEmploye(this.employe.idEmploye).subscribe(data=>{
      console.log( "Employé supprimé avec succès !!" );
      window.location.reload();
    });
  }

  getAllEmp(){
    this.employeservice.getAllEmployes().subscribe(data=>{
      this.lstEmp = data;
      console.log( "Liste des employés récupérée !" );
    },
      error => {console.log(error);
    });
  }

  getEmpById(){
    this.dateJour = Date.now();
    this.employeservice.getEmpById(this.employe.idEmploye).subscribe(data=>{
      this.employe = data;
    },
      error => {console.log(error);
    });
  }
}
