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
  
    constructor(private monServiceReservations: ReservationsService) {}
  
    ngOnInit(): void {
      this.monServiceReservations.getReservations().subscribe((reservations) => {this.listeReservation = reservations;});
    }

}
