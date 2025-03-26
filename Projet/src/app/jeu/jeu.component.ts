import { Component, OnInit, Input } from '@angular/core';
import { Jeu } from "../models/jeu.model";
import { JeuxService } from '../services/jeux.service';
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

  constructor(private monServiceJeux: JeuxService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.idJeu = this.route.snapshot.params['id'];
      if (this.idJeu !== undefined) {
        this.monServiceJeux.getJeuById(+this.idJeu).subscribe(jeu => {this.leJeu = jeu});
      }
      else {
        this.leJeu = this.Jeu
      }
  }

}
