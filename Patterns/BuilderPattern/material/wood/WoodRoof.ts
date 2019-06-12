import { Roof } from "../../models/Roof";

export class WoodRoof implements Roof {
  public getRepresentation(): string {
    return 'Finished building wood roof';
  }
}