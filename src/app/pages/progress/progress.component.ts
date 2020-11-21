import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  porcentaje1: number = 10;
  porcentaje2: number = 20;

  get getPorcentaje1() {
    return `${ this.porcentaje1 }%`
  }

  get getPorcentaje2() {
    return `${ this.porcentaje2 }%`
  }

}
