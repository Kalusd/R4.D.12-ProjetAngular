import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
