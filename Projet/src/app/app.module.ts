import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JeuComponent } from './jeu/jeu.component';
import { ListeJeuComponent } from './liste-jeu/liste-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    ListeJeuComponent
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
