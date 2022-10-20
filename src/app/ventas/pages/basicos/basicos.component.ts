import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'Adrian';
  nombreUpper: string = 'ADRIAN';
  nombreCompleto: string = 'aDriAn MOlInA mENeseS';

  fecha: Date = new Date(); // el día de hoy
}
