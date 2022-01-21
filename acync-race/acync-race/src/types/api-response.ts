interface Car {
  id: number;
  name: string;
  color: string;
}

interface Winner {
  car: Car;
  time: number;
}

export type { Car, Winner };
