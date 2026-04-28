import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  static REPO_PRODUCTS = "_PRODUCTS";

  findAll(): Product[] {
    return [
      { id: '1', name: 'Café', quantity: 1, unitValue: 10, category: Category.GROCERIES, checked: false },
      { id: '2', name: 'Sabonete', quantity: 2, unitValue: 15, category: Category.PERSONAL_CARE_CLEANING, checked: false },
      { id: '1', name: 'Presunto', quantity: 1.5, unitValue: 50, category: Category.MEAT_DELI, checked: true },
      { id: '1', name: 'Laranja', quantity: 0.6, unitValue: 6, category: Category.PRODUCE, checked: false },
    ];
  }

  private getStorage(): Product[] {
    const repositoryProducts = localStorage.getItem(ProductService.REPO_PRODUCTS);

    if (repositoryProducts) {
      const products: Product[] = JSON.parse(repositoryProducts);
      return products;
    }

    const products: Product[] = [];
    localStorage.setItem(ProductService.REPO_PRODUCTS, JSON.stringify(products));
    return products;
  }

}
