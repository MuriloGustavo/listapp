import { Category } from "./enums/category";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  category: Category;
  checked: boolean;
}
