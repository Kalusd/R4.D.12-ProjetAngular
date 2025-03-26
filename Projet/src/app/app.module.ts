import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JeuComponent } from './jeu/jeu.component';
import { ListeJeuComponent } from './liste-jeu/liste-jeu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    ListeJeuComponent,
    ReservationComponent,
    ListeReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
