import {Component, Input, Output} from '@angular/core';
import {Personne} from "../model/Personne";
import { EmbaucheServiceService } from '../cv-embauche/embauche-service.service';
import { CvServiceService } from '../cv-service.service';
@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() personne:Personne;
  @Input()
  set id(cvId: number){
    // this.id = cvId;
    const cvPersonne = this.cvService.getCvPersonne(cvId);
    this.personne = cvPersonne? cvPersonne: new Personne();
  }


  constructor(private embaucheService: EmbaucheServiceService, private cvService: CvServiceService
    ) {
      this.personne = new Personne();
    }
  EmbauchePersonne(id: number): void{
    const PersonneEmbauchee = this.cvService.getCvPersonne(id);
    PersonneEmbauchee? this.personne= PersonneEmbauchee: this.personne = new Personne();
    this.embaucheService.addToEmbauche(this.personne);
    console.log(this.personne)

  }

  getCvPersonne(id: number): void{
    const cvPersonne = this.cvService.getCvPersonne(id);
    cvPersonne? this.personne= cvPersonne: this.personne = new Personne();
    }
  }
