import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {CvServiceService} from "../cv-service.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit
{
  personnes:Personne [];
  SelectedPesonne!:Personne;
  constructor(CvServiceService:CvServiceService) {
    this.personnes=CvServiceService.listCvPersonne();

  }

  ngOnInit(): void {
  }

  selectPersonne(personne:Personne){
  this.SelectedPesonne=personne;
  }


}