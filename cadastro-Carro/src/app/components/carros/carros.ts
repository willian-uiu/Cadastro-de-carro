import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroExp } from '../../Carro';


@Component({
  selector: 'app-carros',
  imports: [CommonModule],
  templateUrl: './carros.html',
  styleUrl: './carros.css',
})
export class Carros {
  carroInput : CarroExp = {} as CarroExp;


  carros : CarroExp[] = [
    
    { id: 1, nome: 'Gol', montadora: 'Volkswagen', preco: 50000, ano: 2018 },
    { id: 2, nome: 'Onix', montadora: 'Chevrolet', preco: 60000, ano: 2019 },
    { id: 3, nome: 'Fiesta', montadora: 'Ford', preco: 55000, ano: 2017 },
  ]
}
