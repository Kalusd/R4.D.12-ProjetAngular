import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:3000/reservations');
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>('http://localhost:3000/reservations/' + id);
  }

  getReservationsByGame(gameId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:3000/reservations?idJeuReservation=' + gameId);
  }
}
