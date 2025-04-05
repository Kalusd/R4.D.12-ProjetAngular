import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';
import { JeuxService } from '../services/jeux.service';
import { Jeu } from '../models/jeu.model';

@Component({
  selector: 'app-liste-reservation',
  standalone: false,
  templateUrl: './liste-reservation.component.html',
  styleUrl: './liste-reservation.component.scss'
})
export class ListeReservationComponent implements OnInit {
  
    listeReservation! : Reservation[];
    listeReservationFiltree! : Reservation[];
    listeJeux! : Jeu[];
    termeRecherche: string = '';
    filtreStatut: string = '';
    filtreJeu: string = '';
  
    constructor(private monServiceReservations: ReservationsService, private monServiceJeux: JeuxService) {}
  
    ngOnInit(): void {
      this.monServiceReservations.getReservations().subscribe((reservations) => {
        this.listeReservation = reservations;
        this.listeReservationFiltree = reservations;
      });

      this.monServiceJeux.getJeux().subscribe((jeux) => {
        this.listeJeux = jeux;
      });
    }

    appliquerFiltrage(): void {
      this.listeReservationFiltree = this.listeReservation.filter((reservation) => {
        const resultatsRecherche = this.termeRecherche
          ? reservation.nomClient.toLowerCase().includes(this.termeRecherche.toLowerCase()) ||
            reservation.emailClient.toLowerCase().includes(this.termeRecherche.toLowerCase())
          : true;

        const resultatsFiltrageStatut = this.filtreStatut
          ? reservation.statutReservation === this.filtreStatut
          : true;

        const resultatsFiltrageJeux = this.filtreJeu
          ? reservation.titreJeuReservation === this.filtreJeu
          : true;

        return resultatsRecherche && resultatsFiltrageStatut && resultatsFiltrageJeux;
      });
    }


}
