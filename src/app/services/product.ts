import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  static REPO_PRODUCTS = "_PRODUCTS";

  save(product: Product) {
    const products = this.getStorage();
    products.push(product);

    localStorage.setItem(ProductService.REPO_PRODUCTS, JSON.stringify(products));
  }

  findAll(): Product[] {
    return this.getStorage();
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
