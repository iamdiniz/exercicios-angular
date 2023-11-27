import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  itens = [
    { name: 'Item 1', category: 'Categoria A' },
    { name: 'Item 2', category: 'Categoria B' },
    { name: 'Item 3', category: 'Categoria C' },
  ];

  displayedColumns: string[] = ['name', 'category'];

}
