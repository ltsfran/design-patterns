import { Personaje } from './Personaje';

const VIDA: number = 200;
const ATAQUE: number = 150;

export class Duende extends Personaje {
  constructor() {
    super(VIDA, ATAQUE);
  }

  public clone(): Personaje {
    let clone: Duende = new Duende();
    clone.vida = this.vida;
    clone.ataque = this.ataque;
    return clone;
  }

  public toString(): string {
    return "duende";
  }
}