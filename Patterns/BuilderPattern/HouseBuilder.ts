import { House } from "./House";
import { Floor } from "./models/Floor";
import { Walls } from "./models/Walls";
import { Roof } from "./models/Roof";

export abstract class HouseBuilder {
  protected house: House;
  protected floor: Floor;
  protected walls: Walls;
  protected roof: Roof;
  public abstract createHouse(): House;
  public abstract createFloor(): Floor;
  public abstract createWalls(): Walls;
  public abstract createRoof(): Roof;
}