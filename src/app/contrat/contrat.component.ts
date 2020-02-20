import { Component, OnInit } from '@angular/core';
import { Employe } from '../model/employe';
import { EmployeService } from '../services/employe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  employe : Employe;
  lstEmp : Employe[];
  dateJour : number;

  myForm = new FormGroup({
    idEmploye : new FormControl('',Validators.required)
  });

  constructor(private employeservice:EmployeService) { this.employe = new Employe }

  ngOnInit() {
    this.getAllEmp();
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
    console.log("blalblblb");
  }
}
