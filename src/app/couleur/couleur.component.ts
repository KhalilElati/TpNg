import { Component } from '@angular/core';

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent {
    color: string = 'white'
    constructor() {}
    changeColor(input: any) {
        this.color = input.value
    }
    resetColor() {
        this.color = 'white'
    }
}
