import { HouseBuilder } from "./HouseBuilder";
import { House } from './House';

export class HouseDirector {
  public construcHouse(builder: HouseBuilder) {
    let house: House = builder.createHouse();
    console.log(house.getRepresentation());
    house.setFloor = builder.createFloor();
    console.log(house.getFloor.getRepresentation());
    house.setWalls = builder.createWalls();
    console.log(house.getWalls.getRepresentation());
    house.setRoof = builder.createRoof();
    console.log(house.getRoof.getRepresentation());
    return house;
  }
}