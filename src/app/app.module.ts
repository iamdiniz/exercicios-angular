import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './exercicio1/contador-component/contador-component.component';
import { ListItemsComponent } from './exercicio2/list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
