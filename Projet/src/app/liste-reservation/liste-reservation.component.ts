import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-liste-reservation',
  standalone: false,
  templateUrl: './liste-reservation.component.html',
  styleUrl: './liste-reservation.component.scss'
})
export class ListeReservationComponent implements OnInit {
  
    listeReservation! : Reservation[];
    listeReservationFiltree! : Reservation[];
    termeRecherche: string = '';
    filtreStatut: string = '';
  
    constructor(private monServiceReservations: ReservationsService) {}
  
    ngOnInit(): void {
      this.monServiceReservations.getReservations().subscribe((reservations) => {
        this.listeReservation = reservations;
        this.listeReservationFiltree = reservations;
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

        return resultatsRecherche && resultatsFiltrageStatut;
      });
    }


}
