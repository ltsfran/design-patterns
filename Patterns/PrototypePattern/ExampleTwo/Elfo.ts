import { Personaje } from './Personaje';

const VIDA: number = 100;
const ATAQUE: number = 250;

export class Elfo extends Personaje {
  constructor() {
    super(VIDA, ATAQUE);
  }

  public clone(): Personaje {
    let clone: Elfo = new Elfo();
    clone.vida = this.vida;
    clone.ataque = this.ataque;
    return clone;
  }

  public toString(): string {
    return "elfo";
  }
}