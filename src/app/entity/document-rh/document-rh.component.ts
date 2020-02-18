import { Component, OnInit } from '@angular/core';
import { DocumentRH } from 'src/app/model/document-rh';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentRHService } from 'src/app/services/document-rh.service';


@Component({
  selector: 'app-document-rh',
  templateUrl: './document-rh.component.html',
  styleUrls: ['./document-rh.component.css']
})
export class DocumentRHComponent implements OnInit {

  documentrh:DocumentRH;
  lstdocuments:DocumentRH[];
  idEmp:string;

  myForm = new FormGroup({
    idEmp : new FormControl('',Validators.required),
    idDocument : new FormControl('',Validators.required),
    typeDocument : new FormControl('',Validators.required),
    dateEditionDocument : new FormControl('',Validators.required),
    employe: new FormControl('',Validators.required)
  });

  constructor(private documentrhservice:DocumentRHService) { this.documentrh = new DocumentRH}

  ngOnInit() {
    this.getAllDoc();
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

}
