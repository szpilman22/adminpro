import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgres: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambiaValor: EventEmitter<number> = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  onChanges ( newValue: number ) {

  // let caja: any = document.getElementsByName('porcentaje')[0];
  console.log(this.txtProgres);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // caja.value = this.porcentaje;
    this.txtProgres.nativeElement.value = this.porcentaje;
    this.cambiaValor.emit(this.porcentaje);
  }

  cambiarValor ( valor: number ) {

    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
      this.porcentaje = this.porcentaje + valor;
      this.cambiaValor.emit(this.porcentaje);
      this.txtProgres.nativeElement.focus();
    }

}
