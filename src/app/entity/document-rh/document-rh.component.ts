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

  documentrh: DocumentRH;
  lstdocuments: DocumentRH[];
  idemp: string;
  idDoc: string;
  employe: Employe;
  lstemployes: Employe[];

  myForm = new FormGroup({
    idDocument: new FormControl('', Validators.required),
    typeDocument: new FormControl('', Validators.required),
    dateEditionDocument: new FormControl('', Validators.required),
    idemp: new FormControl('', Validators.required)
  });

  myFormDelete = new FormGroup({
    idDocument: new FormControl('', Validators.required)
  })

  constructor(private documentrhservice: DocumentRHService, private employeservice: EmployeService) { this.documentrh = new DocumentRH }

  ngOnInit() {
    this.getAllDoc();
    this.getAllEmp();
  }

  ajoutDocument() {
    this.documentrhservice.ajoutDocumentService({ doc: this.documentrh, idemp: this.idemp }).subscribe(data => {
      console.log("Document ajouté avec succès !!");
      window.location.reload();
    });
  }
  getAllDoc() {
    this.documentrhservice.getAllDocuments().subscribe(data => {
      this.lstdocuments = data;
    },
      error => { console.log(error); });
  }

  getAllEmp() {
    this.employeservice.getAllEmployes().subscribe(data => {
      this.lstemployes = data;
    },
      error => { console.log(error); });
  }
  supprimerDocument(): void {
    this.documentrhservice.suppDocument(this.documentrh.idDocument).subscribe(data => {
      console.log("Document supprimée avec succès !")
      window.location.reload();
    });
  }
  getDocumentId() {
    this.documentrhservice.getDocById(this.documentrh.idDocument).subscribe(data => {
      this.documentrh = data;
      console.log("Got it !")
    },
      error => {
        console.log(error);
      });
  }

}
