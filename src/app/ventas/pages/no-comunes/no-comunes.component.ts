import { Component } from '@angular/core';
import { resolve } from 'dns';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Adrian';
  personas: any[] = [
    { nombre: 'Adrian', genero: 'masculino' },
    { nombre: 'Patricia', genero: 'femenino' },
    { nombre: 'Vania', genero: 'femenino' },
    { nombre: 'Laura', genero: 'femenino' },
    { nombre: 'Juan', genero: 'masculino' },
  ];
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Adrian', 'Vania'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona() {
    var persona =
      this.personas[Math.floor(Math.random() * this.personas.length)];
    this.nombre = persona.nombre;
    this.genero = persona.genero;
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Adrian',
    edad: 34,
    direccion: 'Cochabamba, Bolivia',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4,5,6,7,8,9,...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
