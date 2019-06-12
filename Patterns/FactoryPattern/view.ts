import { ProductFactory } from './ProductFactory';
import { Product } from './models/Product';

let pf: ProductFactory = new ProductFactory();
let prod: Product;
prod = pf.createProduct("A");
prod.writeName("Luis Tupa");
prod = pf.createProduct("B");
prod.writeName("Luis Tupa");