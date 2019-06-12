import { Walls } from "../../models/Walls";

export class BrickWalls implements Walls {
  public getRepresentation(): string {
    return 'Finished building brick walls';
  }
}