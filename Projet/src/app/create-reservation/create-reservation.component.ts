import { Component } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../services/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservation',
  standalone: false,
  templateUrl: './create-reservation.component.html',
  styleUrl: './create-reservation.component.scss'
})
export class CreateReservationComponent {
  leFormulaire!: FormGroup;
  reservationActuelle!: Reservation;
  regexNumeroTelephone = new RegExp(/^\d{10}$/);

  constructor(private formBuilder: FormBuilder, private monServiceReservations: ReservationsService, private router: Router) {}

  ngOnInit(): void {
    // Initialisation du formulaire (on récupérera id plus tard, et idJeuReservation à travers le titre)
    this.leFormulaire = this.formBuilder.group({
      nomClient: [null, [Validators.required, Validators.minLength(3)]],
      emailClient: [null, [Validators.required, Validators.email]],
      numeroTelephone: [null, [Validators.required, Validators.pattern(this.regexNumeroTelephone)]],
      titreJeuReservation: [null, [Validators.required]],
      plateforme: [null, [Validators.required]],
      dateDeReservation: [null, [Validators.required]],
      statutReservation: [null, [Validators.required]]
    });

    this.leFormulaire.valueChanges.subscribe((formValue) => {
      this.reservationActuelle = {
        id: 0,
        nomClient: formValue.nomClient,
        emailClient: formValue.emailClient,
        numeroTelephone: formValue.numeroTelephone,
        idJeuReservation: 0,
        titreJeuReservation: formValue.titreJeuReservation,
        plateforme: formValue.plateforme,
        dateDeReservation: formValue.dateDeReservation,
        statutReservation: formValue.statutReservation
      };
    });
  }

  createReservation() {
    if (this.leFormulaire.valid) {
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
