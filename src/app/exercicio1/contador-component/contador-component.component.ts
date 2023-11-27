import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})
export class ContadorComponentComponent {

  valor: number = 0;

  increment() {
    this.valor++;
  }

  decrement() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

}
