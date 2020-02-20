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
  lstemployes: Employe[];

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
      this.lstemployes = data;
      console.log( "Liste des employés récupérée !" );
    },
      error => {console.log(error);
    });
  }

  getEmpById(){
    this.employeservice.getEmpById(this.employe.idEmploye).subscribe(data=>{
      this.employe = data;
    },
      error => {console.log(error);
    });
  }
}
