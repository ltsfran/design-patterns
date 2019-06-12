import { Walls } from "../../models/Walls";

export class WoodWalls implements Walls {
  public getRepresentation(): string {
    return 'Finished building wood walls';
  }
}