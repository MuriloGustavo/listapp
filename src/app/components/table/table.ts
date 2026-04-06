import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {

  products: Product[] = [];
  columns: String[] = ["id", "name", "quantity", "unitValue", "totalValue", "category"];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.products = this.service.findAll();
  }

}
