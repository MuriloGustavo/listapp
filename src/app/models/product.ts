import { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  unitValue: number;
  category: Category;
}
