import { Employe } from './employe';
import { Fourniture } from './fourniture';

export class FormulaireEmprunt {
    idFormulaire:number;
    typeFormulaire:string;
    quantite:number;
    nomFormulaire:string;
    dateEmprunt:Date;
    dateRetour:Date;
    employe:Employe;
    demandeValidee:Boolean;
    fourniture:Fourniture;
}
