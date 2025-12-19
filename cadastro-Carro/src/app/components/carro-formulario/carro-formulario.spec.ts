import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroFormulario } from './carro-formulario';

describe('CarroFormulario', () => {
  let component: CarroFormulario;
  let fixture: ComponentFixture<CarroFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
