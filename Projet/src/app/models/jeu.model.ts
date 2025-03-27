export class Jeu {
    id!: number;
    titre!: string;
    plateforme!: Array<string>;
    genre!: Array<string>;
    developpeur!: string;
    dateDeSortie!: Date;
    stockDisponible!: number;
    prix!: number;
    cheminImage!: string;

    constructor(id: number, titre: string, plateforme: Array<string>, genre: Array<string>, developpeur: string, dateDeSortie: Date, stockDisponible: number, prix: number, cheminImage: string) {
        this.id = id;
        this.titre = titre;
        this.plateforme = plateforme;
        this.genre = genre;
        this.developpeur = developpeur;
        this.dateDeSortie = dateDeSortie;
        this.stockDisponible = stockDisponible;
        this.prix = prix;
        this.cheminImage = cheminImage;
    }
}