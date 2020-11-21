import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') porcentaje: number = 50;
  @Input() btnClass: string = 'btn-primary'

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number) {
    if (this.porcentaje >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.porcentaje = 100;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.porcentaje = 0;
    }

    this.porcentaje = this.porcentaje + valor;
    this.valorSalida.emit(this.porcentaje);
  }

  onChange( nuevoValor: number ) {
    if( nuevoValor >= 100) {
      this.porcentaje = 100;
    } else if ( nuevoValor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = nuevoValor;
    }
    this.valorSalida.emit( this.porcentaje );
  }

}
