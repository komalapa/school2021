export enum Shapes {
  Ball = "шар",
  Figure = "фигурка",
  Bell = "колокольчик",
  Pinecone = "шишка",
  Snowflake = "снежинка",
  Other = "",
}

export enum Colors {
  Yellow = "желтый",
  Green = "зелёный",
  Red = "красный",
  White = "белый",
  Blue = "синий",
  Other = "другой",
}

export enum Size {
  L = "большой",
  M = "средний",
  S = "малый",
}
export interface IToy {
  id: number;
  name: string;
  count: number;
  year: number;
  shape: Shapes;
  color: Colors;
  size: Size;
  isFavorite: Boolean;
}

export type ToyData = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export interface Filters {
  color: Colors[];
  shape: Shapes[];
  size: Size[];
}

export enum Direction {
  Up,
  Down,
}
export interface Sort {
  type: string; //"name" | "year" | "number";
  direction: Direction;
}
export interface SpanObject {
  min: number;
  max: number;
}

export interface SpanFilters {
  year: SpanObject;
  count: SpanObject;
}
