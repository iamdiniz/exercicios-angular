// list-items.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  template: `
    <div>
      <h2>Lista de Itens</h2>
      <input [(ngModel)]="newItem" placeholder="Adicionar novo item" maxlength="100" />
      <button (click)="addItem()">Adicionar</button>
      <table>
        <tr *ngFor="let item of items" [style.background-color]="item.completed ? 'yellow' : 'inherit'">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>
            <button (click)="deleteItem(item)">🗑️</button>
          </td>
          <td>
            <button (click)="completeItem(item)">✅</button>
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: [
    `
      table {
        width: 100%;
        border-collapse: collapse;
      }

      tr {
        border: 1px solid #ddd;
        padding: 8px;
      }

      td {
        border: 1px solid #ddd;
        padding: 8px;
      }
    `,
  ],
})
export class ListItemsComponent {
  items = [
    { name: 'Item 1', category: 'Categoria A', completed: false },
    { name: 'Item 2', category: 'Categoria B', completed: false },
    { name: 'Item 3', category: 'Categoria C', completed: false },
  ];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push({ name: this.newItem, category: 'Nova Categoria', completed: false });
      this.newItem = ''; // Limpa o campo de entrada após adicionar
    }
  }

  deleteItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  completeItem(item: any) {
    item.completed = !item.completed;
  }
}
