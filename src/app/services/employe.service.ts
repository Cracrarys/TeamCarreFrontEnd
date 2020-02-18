import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  public employe_API = 'http://localhost:8080/employeRestController/';

}
