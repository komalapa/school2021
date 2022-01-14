import { Toy } from "./toys/toy";
import { Colors, Direction, Filters, Shapes, Size, SpanFilters } from "./types";

interface FilterCheckInputProps {
  className: string;
  onToggleFilter: CallableFunction;
  checked: boolean;
  filterName: string;
  filterValue: Colors | Shapes | Size;
}

interface LightsProps {
  colors: Colors[] | null;
}

interface MainTreeProps {
  treeUrl: string;
  lights: Colors[];
  onTakeToy: CallableFunction;
}

interface RadioInputProps {
  className: string;
  id: string;
  radioName: string;
  type: string;
  value: Direction;
  onChoose: CallableFunction;
  selected: boolean;
}


interface ToysAppProps {
  favorites: Toy[];
  sendFavorites: CallableFunction;
}


interface ToysPanelProps {
  toys: Toy[];
  onTakeToy: CallableFunction;
  isSnow: boolean;
  toggleSnow: CallableFunction;
  isMusic: boolean;
  toggleMusic: CallableFunction;
}

interface TreeAppProps {
  favorites: Toy[];
}

interface TreePanelProps {
  setBackground: CallableFunction;
  setTree: CallableFunction;
  backgroundNumber: number;
  treeNumber: number;
  setLights: CallableFunction;
  lights: Colors[];
}

interface TreeSelectorProps {
  setupTree: CallableFunction;
  selected: number;
}

interface YearFilterContainerProps {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  minVal?: number;
  maxVal?: number;
  step?: number;
}

interface ColorFilterContainerProps {
  toggleFilter: CallableFunction;
  checked: Colors[];
  header?: string;
}

interface CountFilterContainerProps {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  minVal?: number;
  maxVal?: number;
  step?: number;
}

interface FavoriteProps {
  isFavorite: boolean;
  toggleFavorite: CallableFunction;
  favoritesCount: number;
}

interface FiltersContainerProps {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
  filters: Filters;
  spanFilters: SpanFilters;
  toggleOnlyFavorite: CallableFunction;
  favoritesCount: number;
  setupSort: CallableFunction;
  reset: CallableFunction;
  setupSearch: CallableFunction;
  searchLine: string;
}

interface ToysContainerProps {
  toys: Toy[];
  toggleFavorite: CallableFunction;
  favoritesCount: number;
}

export type { 
  FilterCheckInputProps,
  LightsProps,
  MainTreeProps,
  RadioInputProps,
  ToysAppProps,
  ToysPanelProps,
  TreeAppProps,
  TreePanelProps,
  TreeSelectorProps, 
  YearFilterContainerProps,
  ColorFilterContainerProps,
  CountFilterContainerProps,
  FavoriteProps,
  FiltersContainerProps,
  ToysContainerProps
};
