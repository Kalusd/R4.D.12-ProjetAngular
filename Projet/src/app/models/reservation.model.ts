export class Reservation {
    id!: number;
    nomClient!: string;
    emailClient!: string;
    numeroTelephone!: string;
    idJeuReservation!: number;
    titreJeuReservation!: string;
    plateforme!: string;
    dateDeReservation!: Date;
    statutReservation!: string;

    constructor(id: number, nomClient: string, emailClient: string, numeroTelephone: string, idJeuReservation: number, titreJeuReservation: string, plateforme: string, dateDeReservation: Date, statutReservation: string) {
        this.id = id;
        this.nomClient = nomClient;
        this.emailClient = emailClient;
        this.numeroTelephone = numeroTelephone;
        this.idJeuReservation = idJeuReservation;
        this.titreJeuReservation = titreJeuReservation;
        this.plateforme = plateforme;
        this.dateDeReservation = dateDeReservation;
        this.statutReservation = statutReservation;
    }
}