import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Category } from '../../models/enums/category';
import { CategoryLabelsPT } from '../../shared/constants/ category-labels';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {

  productForm: FormGroup;

  categories = Object.values(Category);
  categoryLabels = CategoryLabelsPT;

  constructor(private productService: ProductService) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitPrice: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      checked: new FormControl(false, Validators.required),
    });
  }

  add() {
    const product: Product = {
      id: crypto.randomUUID(),
      name: this.productForm.value.name,
      quantity: this.productForm.value.quantity,
      unitPrice: this.productForm.value.unitPrice,
      category: this.productForm.value.category,
      checked: this.productForm.value.checked,
    };

    this.productService.save(product);
  }
}
