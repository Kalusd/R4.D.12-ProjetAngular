import { Component } from '@angular/core';
import { Jeu } from '../models/jeu.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JeuxService } from '../services/jeux.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-jeu',
  standalone: false,
  templateUrl: './create-jeu.component.html',
  styleUrl: './create-jeu.component.scss'
})
export class CreateJeuComponent {
  leFormulaire!: FormGroup;
  jeuActuel!: Jeu;
  regexPlateformesJeu = new RegExp(/^(\s*[\w\s-]+\s*)(;\s*[\w\s-]+\s*)*$/);
  regexCheminImage = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

  constructor(private formBuilder: FormBuilder, private monServiceJeux: JeuxService, private router: Router) {}

  ngOnInit(): void {
    
    this.leFormulaire = this.formBuilder.group({
      titre: [null, [Validators.required, Validators.minLength(6)]],
      plateforme: [null, [Validators.required, Validators.pattern(this.regexPlateformesJeu)]],
      genre: [null, [Validators.required, Validators.minLength(6)]],
      developpeur: [null, [Validators.required, Validators.minLength(6)]],
      dateDeSortie: [null, [Validators.required]],
      stockDisponible: [null, [Validators.required, Validators.min(0)]],
      prix: [null, [Validators.required, Validators.min(0)]],
      cheminImage: [null, [Validators.required, Validators.pattern(this.regexCheminImage)]]
    });

    this.leFormulaire.valueChanges.subscribe((formValue) => {
      this.jeuActuel = {
        id: 0,
        titre: formValue.titre,
        plateforme: formValue.plateforme,
        genre: formValue.genre,
        developpeur: formValue.developpeur,
        dateDeSortie: formValue.dateDeSortie,
        stockDisponible: formValue.stockDisponible,
        prix: formValue.prix,
        cheminImage: formValue.cheminImage
      };
    });
  }

  createJeu() {
    if (this.leFormulaire.valid) {
      let newJeu = {
        id: 0,
        titre: this.leFormulaire.get('titre')?.value,
        plateforme: this.leFormulaire.get('plateforme')?.value,
        genre: this.leFormulaire.get('genre')?.value,
        developpeur: this.leFormulaire.get('developpeur')?.value,
        dateDeSortie: this.leFormulaire.get('dateDeSortie')?.value,
        stockDisponible: this.leFormulaire.get('stockDisponible')?.value,
        prix: this.leFormulaire.get('prix')?.value,
        cheminImage: this.leFormulaire.get('cheminImage')?.value
      };

      this.monServiceJeux.addJeu(newJeu).subscribe({
        next: (jeu: Jeu) => {
          this.router.navigateByUrl('/catalogue-jeux');
        },
        error: (err: any) => {
          console.error('Observable ajout jeu à émis une erreur : ' + err);
          alert("Une erreur est survenue. Le jeu n'a pas pu être ajouté.");
        }
      });
    }
  }
}
