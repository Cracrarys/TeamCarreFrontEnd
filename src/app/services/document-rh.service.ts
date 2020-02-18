import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentRH } from '../model/document-rh';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentRHService {

  constructor(private http:HttpClient) { }

  public document_API = 'http://localhost:8081/documentRestController/';

  ajoutDocument({ doc, idemp }: { doc: DocumentRH; idemp: string; }):Observable<any>{
    return this.http.post( this.document_API + 'ajout/' + idemp, doc);
  }

  supprimerDocument(idDoc:string):Observable<any>{
    return this.http.delete(this.document_API + 'supprimer/' + idDoc);
  }

  getAllDocuments():Observable<any>{
    return this.http.get(this.document_API + 'getAll');
  }
  
  getDocById(id:string):Observable<any>{
    return this.http.get(this.document_API + 'getbyid/' + id);
  }

}
