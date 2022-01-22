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

export type { Car, Winner };
