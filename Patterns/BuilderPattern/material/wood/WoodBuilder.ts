import { HouseBuilder } from "../../HouseBuilder";
import { House } from '../../House';
import { Floor } from '../../models/Floor';
import { Walls } from '../../models/Walls';
import { Roof } from '../../models/Roof';
import { WoodFloor } from "./WoodFloor";
import { WoodHouse } from "./WoodHouse";
import { WoodWalls } from "./WoodWalls";
import { WoodRoof } from "./WoodRoof";

export class WoodBuilder extends HouseBuilder {
  public createHouse(): House {
    this.house = new WoodHouse();
    return this.house;
  };
  public createFloor(): Floor {
    this.floor = new WoodFloor();
    return this.floor;
  };
  public createWalls(): Walls {
    this.walls = new WoodWalls();
    return this.walls;
  };
  public createRoof(): Roof {
    this.roof = new WoodRoof();
      return this.roof;
  };
}