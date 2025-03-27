import { Component, OnInit, Input } from '@angular/core';
import { Jeu } from "../models/jeu.model";
import { Reservation } from '../models/reservation.model';
import { JeuxService } from '../services/jeux.service';
import { ReservationsService } from '../services/reservations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jeu',
  standalone: false,
  templateUrl: './jeu.component.html',
  styleUrl: './jeu.component.scss'
})
export class JeuComponent implements OnInit {
  @Input() Jeu!: Jeu;
  leJeu!: Jeu;
  idJeu!: string;
  lesReservations!: Reservation[];

  constructor(private monServiceJeux: JeuxService, private monServiceReservations: ReservationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      // Récupération de l'identifiant du jeu dans l'url
      this.idJeu = this.route.snapshot.params['id'];
      if (this.idJeu !== undefined) { // S'il y avait un identifiant dans l'url
        // Récupération des informations du jeu par son identifiant puis des réservations pour le jeu
        this.monServiceJeux.getJeuById(+this.idJeu).subscribe(jeu => {
          this.leJeu = jeu;
          this.monServiceReservations.getReservationsByGame(+this.leJeu.id).subscribe(reservations => {this.lesReservations = reservations});
        });
        
      }
      else {
        // Récupération des réservations pour le jeu par binding
        this.leJeu = this.Jeu
        // Récupération des réservations pour le jeu
        this.monServiceReservations.getReservationsByGame(+this.leJeu.id).subscribe(reservations => {this.lesReservations = reservations});
      }
      
  }

}
