import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormulaireEmprunt } from '../model/formulaire-emprunt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireEmpruntService {
  public formulaire_API = 'http://localhost:8081' + '/formulaireRestController';
  constructor(private http: HttpClient) { }
  ajoutFormulaire(formu: FormulaireEmprunt, idemp: number, idfour: number): Observable<any> {
    return this.http.post(this.formulaire_API + '/ajout/' + idemp + '/&/' + idfour, formu);
  };
  suppFormulaire(id: number): Observable<any> {
    return this.http.delete(this.formulaire_API + '/supprimer/' + id);
  };
  findAllFormulaire(): Observable<any> {
    return this.http.get(this.formulaire_API + '/getAll');
  }
  findAllFormulaireNOK(): Observable<any> {
    return this.http.get(this.formulaire_API + '/getAllNonOk');
  }
  findFormulaire(id: number): Observable<any> {
    return this.http.get(this.formulaire_API + '/getbyid/' + id);
  }
}
