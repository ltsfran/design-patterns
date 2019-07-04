export abstract class Personaje {
  public vida: number;
  public ataque: number;

  constructor(vida: number, ataque: number) {
    this.vida = vida;
    this.ataque = ataque;
  }

  public abstract clone(): Personaje;
}