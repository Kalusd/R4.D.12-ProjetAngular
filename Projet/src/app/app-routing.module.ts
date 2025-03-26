import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent } from './jeu/jeu.component';
import { ListeJeuComponent } from './liste-jeu/liste-jeu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';

const routes: Routes = [
  {
    path: 'catalogue-jeux',
    component: ListeJeuComponent
  },
  {
    path: 'jeu/:id',
    component: JeuComponent
  },
  {
    path: 'catalogue-reservations',
    component: ListeReservationComponent
  },
  {
    path: 'reservation/:id',
    component: ReservationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
