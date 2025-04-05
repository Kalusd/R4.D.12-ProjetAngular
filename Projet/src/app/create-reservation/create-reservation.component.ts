import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../services/reservations.service';
import { JeuxService } from '../services/jeux.service';
import { Router } from '@angular/router';
import { Jeu } from '../models/jeu.model';

@Component({
  selector: 'app-create-reservation',
  standalone: false,
  templateUrl: './create-reservation.component.html',
  styleUrl: './create-reservation.component.scss'
})
export class CreateReservationComponent implements OnInit {
  leFormulaire!: FormGroup;
  reservationActuelle!: Reservation;
  listeJeux!: Jeu[];
  plateformesDisponibles!: string[]

  constructor(private formBuilder: FormBuilder, private monServiceReservations: ReservationsService, private monServiceJeux: JeuxService, private router: Router) {}

  ngOnInit(): void {
    // Initialisation du formulaire (on récupérera id plus tard, et idJeuReservation à travers le titre)
    this.leFormulaire = this.formBuilder.group({
      nomClient: [null, [Validators.required, Validators.minLength(3)]],
      emailClient: [null, [Validators.required, Validators.email]],
      numeroTelephone: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      titreJeuReservation: [null, [Validators.required]],
      plateforme: [null, [Validators.required]],
      dateDeReservation: [null, [Validators.required]],
      statutReservation: [null, [Validators.required]]
    });

    // Récupération des jeux
    this.monServiceJeux.getJeux().subscribe((jeux) => {
      this.listeJeux = jeux;
    })
  }

  onJeuChange(titreJeu: string): void {
    // Récupération du jeu choisi
    const jeuChoisi = this.listeJeux.find(jeu => jeu.titre === titreJeu);
    if (jeuChoisi) {
      // Mise à jour des plateformes disponibles en fonction du jeu choisi
      this.plateformesDisponibles = Array.isArray(jeuChoisi.plateforme) ? jeuChoisi.plateforme : [jeuChoisi.plateforme];
    } else {
      // Suppression des plateformes disponibles si aucun jeu n'est trouvé
      this.plateformesDisponibles = [];
    }
  }

  createReservation() {
    if (this.leFormulaire.valid) {
      // Création d'une nouvelle réservation à partir du formulaire
      let newReservation = {
        id: 0,
        nomClient: this.leFormulaire.get('nomClient')?.value,
        emailClient: this.leFormulaire.get('emailClient')?.value,
        numeroTelephone: this.leFormulaire.get('numeroTelephone')?.value,
        idJeuReservation: 0,
        titreJeuReservation: this.leFormulaire.get('titreJeuReservation')?.value,
        plateforme: this.leFormulaire.get('plateforme')?.value,
        dateDeReservation: this.leFormulaire.get('dateDeReservation')?.value,
        statutReservation: this.leFormulaire.get('statutReservation')?.value
      };

      // Récupération de l'identifiant du jeu à partir du titre
      const jeuChoisi = this.listeJeux.find(jeu => jeu.titre === newReservation.titreJeuReservation);
      if (jeuChoisi) {
        newReservation.idJeuReservation = jeuChoisi.id;
      }

      this.monServiceReservations.addReservation(newReservation).subscribe({
        next: (reservation: Reservation) => {
          this.router.navigateByUrl('/catalogue-reservations');
        },
        error: (err: any) => {
          console.error('Observable ajout réservation à émis une erreur : ' + err);
          alert("Une erreur est survenue. La réservation n'a pas pu être ajoutée.");
        }
      });
    }
  }
}
