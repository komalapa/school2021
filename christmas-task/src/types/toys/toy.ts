import { Colors, IToy, Shapes, Size, ToyData } from "../types";

function keyInEnum(e: any, value: string): string {
  let keys = Object.keys(e).filter((x) => e[x] === value);
  return keys.length > 0 ? keys[0] : "";
}

export class Toy implements IToy {
  id: number;
  name: string;
  count: number;
  year: number;
  shape: Shapes;
  color: Colors;
  size: Size;
  isFavorite: boolean;

  constructor(data: ToyData) {
    this.id = +data.num;
    this.name = data.name;
    this.count = +data.count;
    this.year = +data.year;
    //@ts-ignore
    this.shape = Shapes[keyInEnum(Shapes, data.shape)];
    //@ts-ignore
    this.color = Colors[keyInEnum(Colors, data.color)];
    //@ts-ignore
    this.size = Size[keyInEnum(Size, data.size)];
    this.isFavorite = data.favorite;
  }
}
