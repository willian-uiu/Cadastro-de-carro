import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CarroFormulario } from './components/carro-formulario/carro-formulario';
import { FormsModule } from '@angular/forms';
import { Carros } from './components/carros/carros';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    CarroFormulario,
    Carros,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
