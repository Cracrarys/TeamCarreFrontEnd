import { Component, OnInit } from '@angular/core';
import { DocumentRH } from 'src/app/model/document-rh';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentRHService } from 'src/app/services/document-rh.service';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/services/employe.service';


@Component({
  selector: 'app-document-rh',
  templateUrl: './document-rh.component.html',
  styleUrls: ['./document-rh.component.css']
})
export class DocumentRHComponent implements OnInit {

  documentrh:DocumentRH;
  lstdocuments:DocumentRH[];
  idEmp:string;
  idDoc:string;
  employe:Employe;
  lstemployes:Employe[];

  myForm = new FormGroup({
    idDocument : new FormControl('',Validators.required),
    typeDocument : new FormControl('',Validators.required),
    dateEditionDocument : new FormControl('',Validators.required),
    idEmp : new FormControl('',Validators.required)
  });

  myFormDelete = new FormGroup({
    idDoc : new FormControl('',Validators.required)
  })

  constructor(private documentrhservice:DocumentRHService, private employeservice:EmployeService)
    {this.documentrh = new DocumentRH}

  ngOnInit() {
    this.getAllDoc();
    this.getAllEmp();
  }

  ajoutDocument(){
    this.documentrhservice.ajoutDocument({ doc: this.documentrh, idemp: this.idEmp }).subscribe(data=>{
      console.log( "Document ajouté avec succès !!" );
      window.location.reload();
    });
  }

  getAllDoc(){
    this.documentrhservice.getAllDocuments().subscribe(data=>{
      this.lstdocuments = data;
    },
      error => {console.log(error); });
  }

  getAllEmp(){
    this.employeservice.getAllEmployes().subscribe(data=>{
      this.lstemployes = data;
    },
      error => {console.log(error);
    });
  }

}
