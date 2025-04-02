import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JeuComponent } from './jeu/jeu.component';
import { ListeJeuComponent } from './liste-jeu/liste-jeu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateJeuComponent } from './create-jeu/create-jeu.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    ListeJeuComponent,
    ReservationComponent,
    ListeReservationComponent,
    CreateJeuComponent,
    CreateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
