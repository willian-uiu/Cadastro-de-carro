import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarroExp } from '../../Carro';

@Component({
  selector: 'app-carro-formulario',
  imports: [FormsModule],
  templateUrl: './carro-formulario.html',
  styleUrl: './carro-formulario.css',
})
export class CarroFormulario {
  @Input() 
  carroInput : CarroExp = {} as CarroExp;

  @Output()
  saveEmitter = new EventEmitter();
}
