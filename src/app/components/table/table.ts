import { Component, model } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-table',
  imports: [
    CurrencyPipe,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {

  readonly disabled = model(false);
  products: Product[] = [];
  columns: String[] = ["id", "name", "quantity", "unitValue", "totalValue", "category", "actions"];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.products = this.service.findAll();
  }

  save(product: Product) {

  }

  edit(id: string) {

  }

  delete(product: Product) {

  }

}
