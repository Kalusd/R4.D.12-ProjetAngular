import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from "../models/reservation.model";
import { ReservationsService } from '../services/reservations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit{
  @Input() Reservation!: Reservation;
  @Input() afficherBoutonRetour: boolean = true;
  laReservation!: Reservation;
  idReservation!: string;

  constructor(private monServiceReservations: ReservationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupération de l'identifiant de la réservation dans l'url
    this.idReservation = this.route.snapshot.params['id'];
    if (this.idReservation !== undefined) { // S'il y avait un identifiant dans l'url
      // Récupération des informations de la réservation par son identifiant
      this.monServiceReservations.getReservationById(+this.idReservation).subscribe(reservation => {this.laReservation = reservation});
    }
    else {
      // Récupération des informations de la réservation par binding
      this.laReservation = this.Reservation
    }
  }
}
