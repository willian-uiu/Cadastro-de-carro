import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';
import { Carros } from './components/carros/carros';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Carros,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
