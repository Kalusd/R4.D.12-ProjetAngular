import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
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

  addReservation(newReservation: Reservation): Observable<Reservation> {
    return this.getReservations().pipe(
      switchMap((reservations: Reservation[]) => {
        let idMax: number = 0;
        reservations.forEach((reservation: Reservation) => { idMax = (reservation.id > idMax ? reservation.id : idMax); });
        newReservation.id = Number(idMax) + 1;
        return this.http.post<Reservation>('http://localhost:3000/reservations', newReservation);
      })
    );
  }
}
