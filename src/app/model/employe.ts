import { DocumentRH } from './document-rh';
import { FormulaireEmprunt } from './formulaire-emprunt';
import { Fourniture } from './fourniture';

export class Employe {
    idEmploye:number;
    nomEmploye:string;
    prenomEmploye:string;
    sexeEmploye:string;
    adresseEmploye:string;
    statutEmploye:string;
    salaireEmploye:number;
    typeContratEmploye:string;
    dateEntreeEmploye:Date;
    dateSortieEmploye:Date;
    document:DocumentRH[];
    formulaire:FormulaireEmprunt[];
    fourniture:Fourniture[];
}
