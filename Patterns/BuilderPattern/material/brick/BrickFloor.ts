import { Floor } from "../../models/Floor";

export class BrickFloor implements Floor {
  public getRepresentation(): string {
    return 'Finished building brick floor';
  }
}