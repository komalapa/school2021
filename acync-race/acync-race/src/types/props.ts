import { Car } from "./api";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
  onCarInput: CallableFunction;
  isRaceStarted: boolean;
  onFinish: CallableFunction;
}

interface EditCarProps {
  id?: number;
  name?: string;
  color?: string;
  onCarInput: CallableFunction;
  className?: string;
}

interface GarageProps {
  hidden: boolean;
}

interface PaginationProps {
  page?: number;
  count: number;
  onChange: CallableFunction;
}

interface WinnerAlertProps {
  car: Car;
  time: number;
}

interface WinnersTableLine {
  name: string;
  color: string;
  time: number;
  wins: number;
  id: number;
}

export type {
  CarViewProps,
  EditCarProps,
  GarageProps,
  PaginationProps,
  WinnerAlertProps,
  WinnersTableLine
};
