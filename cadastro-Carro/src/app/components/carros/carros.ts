import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroExp } from '../../Carro';
import { CarroFormulario } from '../carro-formulario/carro-formulario';

@Component({
  selector: 'app-carros',
  imports: [CommonModule, CarroFormulario],
  templateUrl: './carros.html',
  styleUrl: './carros.css',
})
export class Carros {
  carroInput: CarroExp = {} as CarroExp;
  idCounter = 1;
  isUpdate = false;

  carros: CarroExp[] = []

  saveCarro() {
    if (!this.isUpdate) {
      this.carroInput.id = this.idCounter;
      this.idCounter++;
      this.carros.push(this.carroInput);
    }
    this.carroInput = {} as CarroExp;
    this.isUpdate = false;
  }

  alterar(carro: CarroExp) {
    this.isUpdate = true;
    this.carroInput = carro;
  }
  remover(carro: CarroExp) {
    this.carros = this.carros.filter(c => c !== carro);
  }
}
