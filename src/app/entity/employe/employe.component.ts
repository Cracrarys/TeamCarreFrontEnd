import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employe:Employe;
  lstemployes:Employe[];

  myForm = new FormGroup({
    idEmploye : new FormControl('',Validators.required),
    nomEmploye : new FormControl('',Validators.required),
    prenomEmploye : new FormControl('',Validators.required),
    sexeEmploye : new FormControl('',Validators.required),
    adresseEmploye : new FormControl('',Validators.required),
    statutEmploye : new FormControl('',Validators.required),
    salaireEmploye : new FormControl('',Validators.required),
    typeContratEmploye : new FormControl('',Validators.required),
    dateEntreeEmploye : new FormControl('',Validators.required),
    dateSortieEmploye : new FormControl('',Validators.required)
  })

  constructor(private employeservice:EmployeService) { this.employe = new Employe }

  ngOnInit() {
    this.getAllEmp();
  }

  ajoutEmploye(){
    this.employeservice.ajoutEmploye(this.employe).subscribe(data=>{
      console.log( "Employé ajouté avec succès !!" );
      window.location.reload();
    });
  }

  getAllEmp(){
    this.employeservice.getAllEmployes().subscribe(data=>{
      this.lstemployes = data;
    },
      error => {console.log(error);
    });
  }

}
