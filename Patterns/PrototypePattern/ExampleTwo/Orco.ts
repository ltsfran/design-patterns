import { Personaje } from "./Personaje";

const VIDA: number = 20;
const ATAQUE: number = 700;

export class Orco extends Personaje {
  constructor() {
    super(VIDA, ATAQUE);
  }
  public clone(): Personaje {
    let clon: Orco = new Orco();
    clon.vida = this.vida;
    clon.ataque = this.ataque;
    return clon;
  }

  public toString(): string {
    return "orco";
  }
}