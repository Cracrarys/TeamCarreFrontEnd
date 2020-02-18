import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  public employe_API = 'http://localhost:8080/employeRestController/';

  ajoutEmploye(emp:Employe):Observable<any>{
    return this.http.post( this.employe_API + 'ajout', emp);
  }

  supprimerEmploye(idEmp:string):Observable<any>{
    return this.http.delete(this.employe_API + 'supprimer/' + idEmp);
  }

  getAllEmployes():Observable<any>{
    return this.http.get(this.employe_API + 'getAll');
  }
  
  getEmpById(id:string):Observable<any>{
    return this.http.get(this.employe_API + 'getbyid/' + id);
  }

}
