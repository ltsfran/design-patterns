import { Roof } from "../../models/Roof";

export class BrickRoof implements Roof {
  public getRepresentation(): string {
    return 'Finished building brick roof';
  }
}