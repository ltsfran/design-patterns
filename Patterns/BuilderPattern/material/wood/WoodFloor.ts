import { Floor } from "../../models/Floor";

export class WoodFloor implements Floor {
  public getRepresentation(): string {
    return 'Finished building wood floor';
  }
}