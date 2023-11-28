import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './exercicio1/contador-component/contador-component.component';
import { ListItemsComponent } from './exercicio2/list-items/list-items.component';
import { FormsModule } from '@angular/forms';
import { FormCadastroComponent } from './exercicio4/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './exercicio5/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './exercicio6/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './exercicio6/componente-filho/componente-filho.component';
import { FormLoginComponent } from './exercicio7/form-login/form-login.component';
import { AreaLogadaComponent } from './exercicio7/area-logada/area-logada.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
