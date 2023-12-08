import { Injectable } from '@angular/core';
import { Personne } from '../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  embauchees: Personne[] = [];
  constructor() {
    this.embauchees = [];
  }
  addToEmbauche(personne: Personne | null): void {
    if (personne && !this.embauchees.includes(personne)) {
      this.embauchees.push(personne);
    }
  }
}
