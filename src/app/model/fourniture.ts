import { FormulaireEmprunt } from './formulaire-emprunt';

import { Employe } from './employe';

export class Fourniture {
    idFourniture: number;
    nomFourniture: String;
    quantiteDisponible: number;
    quantiteTotale: number;
    typeFourniture: String;
    consommable: boolean;
    formulaire: FormulaireEmprunt[];
    employe: Employe[];
}
