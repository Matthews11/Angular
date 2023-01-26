import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraApp';

  numero1 = 0;
  numero2 = 0;
  total = 0;

  calcular(): void {
    this.total = this.numero1 + this.numero2;
  }

  calcular2(): void {
    this.total = this.numero1 - this.numero2;
  }
  calcular3(): void {
    this.total = this.numero1 * this.numero2;
  }
  calcular4(): void {
    this.total = this.numero1 / this.numero2;
  }


}
