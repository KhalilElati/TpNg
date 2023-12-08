import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/Personne';
import { EmbaucheServiceService } from '../embauche-service.service';

@Component({
  selector: 'app-cv-embauche',
  templateUrl: './cv-embauche.component.html',
  styleUrls: ['./cv-embauche.component.css']
})
export class CvEmbaucheComponent implements OnInit {
  personneEmbauche: Personne[] = [];
  constructor(EmbaucheServiceService: EmbaucheServiceService) {
    this.personneEmbauche = EmbaucheServiceService.embauchees;
    console.log(this.personneEmbauche)
   }
   
   ngOnInit(): void {
  }

}
