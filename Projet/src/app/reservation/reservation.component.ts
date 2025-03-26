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
  laReservation!: Reservation;
  idReservation!: string;

  constructor(private monServiceReservations: ReservationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.idReservation = this.route.snapshot.params['id'];
      if (this.idReservation !== undefined) {
        this.monServiceReservations.getReservationById(+this.idReservation).subscribe(reservation => {this.laReservation = reservation});
      }
      else {
        this.laReservation = this.Reservation
      }
  }
}
