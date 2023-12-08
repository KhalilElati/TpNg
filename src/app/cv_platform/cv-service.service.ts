import { Injectable } from '@angular/core';
import { Personne } from './model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  constructor() {}
  CvPersonne: Personne[]= [
    new Personne(1,'El Ati','Khalil',23,'khalil_el_ati.jpg',111888888,'Cloud engineer'),
    new Personne(2,'Mtiri','Wissem',23,'mtiri.jpg',111666666,'cyber security specialist'),
    new Personne(3,'Bouzid','Mohamed aziz',22,'bouzid.jpg',111444444,'serverless backend engineer'),
    new Personne(4,'Bacha','Nermine',22,'nermine_becha.jpg',555555555,'developer')
  ];
  getCvPersonne(id : number): Personne|null {
    const filteredCv:Personne[] = this.CvPersonne.filter((personne: Personne)=> personne.id == id);
    return filteredCv[0]? filteredCv[0]: null;
  }
  listCvPersonne(): Personne[]{
    return this.CvPersonne;
  }
}

