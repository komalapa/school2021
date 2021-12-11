import { Colors, IToy, Shapes, Size, ToyData } from "../types";

function keyInEnum(e:any, value:string):string{
  let keys = Object.keys(e).filter((x) => e[x] === value);
  return keys.length > 0 ? keys[0] : '';
}

export class Toy implements IToy{
  id: number;
  name: string;
  count: number;
  year: number;
  shape: Shapes;
  color: Colors;
  size: Size;
  favorite: boolean;
  
  constructor(data : ToyData) {
    this.id = +data.num;
    this.name = data.name;
    this.count = +data.count;
    this.year =  +data.year;
    console.log((<any>Shapes)[keyInEnum(Shapes,data.shape)])
    this.shape = (<any>Shapes)[keyInEnum(Shapes,data.shape)];
    this.color = (<any>Colors)[keyInEnum(Colors,data.color)]
    this.size = (<any>Size)[keyInEnum(Size,data.size)];
    // this.shape = Shapes[data.shape]; //|| Shapes.Other,
    // this.color = Colors[Object.keys(Colors).find(key => Colors[key] === data.color.toLowerCase()) || Colors.Other]; //|| Colors.Other,
    // this.size = Size[Object.keys(Size).find(key => Size[key] === data.size.toLowerCase()) || Size.M]; //|| Colors.Other,
    this.favorite = data.favorite;
  }
}