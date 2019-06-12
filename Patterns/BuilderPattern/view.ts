import { HouseDirector } from './HouseDirector';
import { WoodBuilder } from './material/wood/WoodBuilder';
import { HouseBuilder } from './HouseBuilder';
import { BrickBuilder } from './material/brick/BrickBuilder';

let director: HouseDirector = new HouseDirector();
let woodBuilder: HouseBuilder = new WoodBuilder();
let brickBuilder: HouseBuilder = new BrickBuilder();
director.construcHouse(woodBuilder);
console.log('');
director.construcHouse(brickBuilder);
