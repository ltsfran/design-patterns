import { Product } from './models/Product';

export class ProductB extends Product {
  writeName(name: string): void {
    console.log('El producto B es ' + name);
  }
}