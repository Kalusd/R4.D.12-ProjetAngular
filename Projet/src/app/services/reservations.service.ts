import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, first } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { JeuxService } from './jeux.service';
import { Jeu } from '../models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient, private monServiceJeux: JeuxService) { }

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
    // this.monServiceJeux.getJeuByTitre(newReservation.titreJeuReservation).subscribe((jeux) => {
    //   newReservation.idJeuReservation = jeux.id;
    //   console.log('Jeu trouvé : ', jeu);
    //   console.log('Nouvel id : ', newReservation.idJeuReservation);
    // });
    // Incrémentation de l'identifiant puis ajout en base de données
    return this.getReservations().pipe(
      switchMap((reservations: Reservation[]) => {
        // Récupération de l'identifiant du jeu réservé
        // this.monServiceJeux.getJeuByTitre(newReservation.titreJeuReservation).pipe(
        //   switchMap((jeux: Jeu[]) => {
        //     let idJeu: number = 0;
        //     jeux.forEach((jeu: Jeu) => { idJeu = jeu.id; });
        //     newReservation.idJeuReservation = idJeu;
        //   })
        // );
        let idMax: number = 0;
        reservations.forEach((reservation: Reservation) => { idMax = (reservation.id > idMax ? reservation.id : idMax); });
        newReservation.id = Number(idMax) + 1;
        return this.http.post<Reservation>('http://localhost:3000/reservations', newReservation);
      })
    );
  }
}
