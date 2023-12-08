import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../model/Personne";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit{
  @Input()  personne:Personne;
  @Output() selectedPersonne=new EventEmitter();
  constructor(private router: Router) {
    this.personne=new Personne();
  }
  onNaviger(){
    const link=['cv',this.personne.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }
  DetailPersonne(){
  }
}