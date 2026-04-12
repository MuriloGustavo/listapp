import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-product',
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {

  openDialog() {

  }

}
