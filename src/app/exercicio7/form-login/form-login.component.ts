import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  autenticado: boolean = false;
  email: string = '';
  senha: string = '';

  fazerLogin() {
    
    if (this.email === 'usuario@exemplo.com' && this.senha === 'senha123') {
      this.autenticado = true;
    }
    else {
      alert('O login falhou. Verifique o e-mail e senha.');
    }
  }
}
