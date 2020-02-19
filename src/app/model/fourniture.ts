import { FormulaireEmprunt } from './formulaire-emprunt';

import { Employe } from './employe';

export class Fourniture {
    idFourniture: number;
    nomFourniture: string;
    quantiteDisponible: number;
    quantiteTotale: number;
    typeFourniture: string;
    consommable: boolean;
    formulaire: FormulaireEmprunt[];
    employe: Employe[];
}
