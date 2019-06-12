import { Product } from './models/Product';
import { ProductA } from './ProductA';
import { ProductB } from './ProductB';

export class ProductFactory {
  createProduct(type: string): Product {
    switch(type) {
      case "A":
        return new ProductA();
      case "B":
        return new ProductB();
      default: 
        break;
    }
  }
}