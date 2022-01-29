interface Car {
  id: number;
  name: string;
  color: string;
}

interface Winner {
  car: Car;
  time: number;
  winnerId?: number;
  winsCount?: number;
}

interface RespWinner {
  id: number;
  time: number;
  wins: number;
}

interface WinnersList {
  winners: RespWinner[];
  count: number;
}

interface CarStartResponse {
  velocity: number;
  distance: number;
}

interface GarageInfo {
  cars: Car[];
  count: number;
}

enum HTTPStatuses {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export type {
  Car,
  Winner,
  RespWinner,
  WinnersList,
  CarStartResponse,
  GarageInfo,
};

export { HTTPStatuses };
