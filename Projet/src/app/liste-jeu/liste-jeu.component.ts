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

  constructor(private monServiceJeux: JeuxService) {}

  ngOnInit(): void {
    this.monServiceJeux.getJeux().subscribe((jeux) => {this.listeJeu = jeux;});
  } 

}
