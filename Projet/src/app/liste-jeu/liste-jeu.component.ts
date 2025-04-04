import { Component, OnInit } from '@angular/core';
import { Jeu } from '../models/jeu.model';
import { JeuxService } from '../services/jeux.service';

@Component({
  selector: 'app-liste-jeu',
  standalone: false,
  templateUrl: './liste-jeu.component.html',
  styleUrl: './liste-jeu.component.scss'
})
export class ListeJeuComponent implements OnInit {

  listeJeu! : Jeu[];
  listeJeuFiltree! : Jeu[];
  listePlateformes! : string[];
  listeGenres! : string[];
  termeRecherche: string = '';
  filtrePlateforme: string = '';
  filtreGenre: string = '';

  constructor(private monServiceJeux: JeuxService) {}

  ngOnInit(): void {
    this.monServiceJeux.getJeux().subscribe((jeux) => {
      // Récupération de la liste des jeux
      this.listeJeu = jeux;
      this.listeJeuFiltree = jeux;

      // Récupération des plateformes et des genres uniques
      this.listePlateformes = Array.from(
        new Set(jeux.flatMap((jeu) => (Array.isArray(jeu.plateforme) ? jeu.plateforme : [jeu.plateforme])))
      );
      this.listeGenres = Array.from(new Set(jeux.map((jeu) => jeu.genre)));
    });
  }

  appliquerFiltrage(): void {
    this.listeJeuFiltree = this.listeJeu.filter((jeu) => {
      const resultatsRecherche = this.termeRecherche
        ? jeu.titre.toLowerCase().includes(this.termeRecherche.toLowerCase())
        : true;

      const resultatsFiltragePlateforme = this.filtrePlateforme
        ? (Array.isArray(jeu.plateforme) ? jeu.plateforme : [jeu.plateforme]).includes(this.filtrePlateforme)
        : true;

      const resultatsFiltrageGenre = this.filtreGenre
        ? jeu.genre === this.filtreGenre
        : true;

      return resultatsRecherche && resultatsFiltragePlateforme && resultatsFiltrageGenre;
    });
  }

}
