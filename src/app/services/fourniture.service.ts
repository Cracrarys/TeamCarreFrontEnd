import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourniture } from '../model/fourniture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournitureService {
  public fourniture_API = 'http://localhost:8080' + '/fournitureRestController';
  constructor(private http: HttpClient) { }
  ajoutFourniture(four: Fourniture): Observable<any> {
    return this.http.post(this.fourniture_API + '/ajout', four);
  };
  suppFourniture(id: string): Observable<any> {
    return this.http.delete(this.fourniture_API + '/supprimer/' + id);
  };
  findAllFourniture(): Observable<any> {
    return this.http.get(this.fourniture_API + '/getAll');
  }
  findFourniture(id: string): Observable<any> {
    return this.http.get(this.fourniture_API + '/getbyid/' + id);
  }
}
