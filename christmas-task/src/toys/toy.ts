import { Colors, IToy, Shapes, Size, ToyData } from "../types/types";

export class Toy implements IToy{
  id: number;
  name: string;
  count: number;
  year: number;
  shape: Shapes;
  color: Colors;
  size: Size;
  favorite: Boolean;
  
  constructor(data : ToyData) {
    this.id = +data.num;
    this.name = data.name;
    this.count = +data.count;
    this.year =  +data.year;
    this.shape = Shapes[Object.keys(Shapes).find(key => Shapes[key] === data.shape.toLowerCase()) || Shapes.Other]; //|| Shapes.Other,
    this.color = Colors[Object.keys(Colors).find(key => Colors[key] === data.color.toLowerCase()) || Colors.Other]; //|| Colors.Other,
    this.size = Size[Object.keys(Size).find(key => Size[key] === data.size.toLowerCase()) || Size.M]; //|| Colors.Other,
    this.favorite = data.favorite;
  }
}