import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../model/Personne";

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
  @Input() personnes:Personne [];
  @Output() selectedPersonne=new EventEmitter<Personne>();
 constructor() {
   this.personnes=[]
 }
 selectPersonne(selectedPersonne:Personne){
   this.selectedPersonne.emit(
     selectedPersonne
   )
 }
}