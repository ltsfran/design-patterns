interface IProduct {
  writeName(name: string): void;
}

export abstract class Product implements IProduct{
  writeName(name: string): void {
    console.log("Mi nombre es " + name);
  }
}