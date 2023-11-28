import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {

  @Input() mensagemDoPai: string = '';
  @Input() itensDoPai: Array<any> = [];

  displayedColumns: string[] = ['name'];

}
