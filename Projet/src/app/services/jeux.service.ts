import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Jeu } from '../models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private http: HttpClient) { }

  getJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>('http://localhost:3000/jeux');
  }

  getJeuById(id: number): Observable<Jeu> {
    return this.http.get<Jeu>('http://localhost:3000/jeux/' + id);
  }

  getJeuByTitre(titre: string): Observable<Jeu> {
    return this.http.get<Jeu>('http://localhost:3000/jeux?titre=' + titre);
  }

  addJeu(newJeu: Jeu): Observable<Jeu> {
    // Conversion de la chaine de caractères des plateformes en tableau
    if (typeof newJeu.plateforme === 'string') {
      newJeu.plateforme = newJeu.plateforme.split(';').map(plateforme => plateforme.trim());
    }
    // Incrémentation de l'identifiant puis ajout en base de données
    return this.getJeux().pipe(
      switchMap((jeux: Jeu[]) => {
      let idMax: number = 0;
      jeux.forEach((jeu: Jeu) => { idMax = (jeu.id > idMax ? jeu.id : idMax); });
      newJeu.id = Number(idMax) + 1;
      return this.http.post<Jeu>('http://localhost:3000/jeux', newJeu);
      })
    );
  }
}

