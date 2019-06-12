import { HouseBuilder } from "../../HouseBuilder";
import { House } from '../../House';
import { Floor } from '../../models/Floor';
import { Walls } from '../../models/Walls';
import { Roof } from '../../models/Roof';
import { BrickFloor } from "./BrickFloor";
import { BrickHouse } from "./BrickHouse";
import { BrickWalls } from "./BrickWalls";
import { BrickRoof } from "./BrickRoof";

export class BrickBuilder extends HouseBuilder {
  public createHouse(): House {
    this.house = new BrickHouse();
    return this.house;
  };
  public createFloor(): Floor {
    this.floor = new BrickFloor();
    return this.floor;
  };
  public createWalls(): Walls {
    this.walls = new BrickWalls();
    return this.walls;
  };
  public createRoof(): Roof {
    this.roof = new BrickRoof();
      return this.roof;
  };
}