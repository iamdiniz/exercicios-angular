import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})

export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  cadastroRealizado: boolean = false;
  mensagemErro: string = '';

  submitForm() {
    if (this.nome && this.email && this.senha) {
      this.cadastroRealizado = true;
      this.mensagemErro = '';
    } else {
      this.cadastroRealizado = false;
      this.mensagemErro = 'Informe os campos corretamente.';
    }
  }
}
