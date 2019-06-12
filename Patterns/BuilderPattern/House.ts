import { Floor } from './models/Floor';
import { Walls } from './models/Walls'; 
import { Roof } from './models/Roof';

export abstract class House {
  protected floor: Floor;
  protected walls: Walls;
  protected roof: Roof;

  get getFloor(): Floor {
    return this.floor;
  }

  set setFloor(floor: Floor) {
    this.floor = floor;
  }

  get getWalls(): Floor {
    return this.walls;
  }

  set setWalls(walls: Walls) {
    this.walls = walls;
  }

  get getRoof(): Roof {
    return this.roof;
  }

  set setRoof(roof: Roof) {
    this.roof = roof;
  }

  public abstract getRepresentation(): string;
}