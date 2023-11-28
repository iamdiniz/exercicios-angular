import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensagemDoPai = 'Ola meu filho, essa mensagem vem do componente pai';

  itensDoPai = [
    { mensagem: 'Essa mensagem está localizada no componente pai' },
    { mensagem: 'E está sendo compartilhada para o componente filho' },
    { mensagem: 'Oi' },
    { mensagem: 'Item' },
    { mensagem: 'Item 2' },
  ];

}
