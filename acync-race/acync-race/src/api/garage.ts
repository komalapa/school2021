import getBrand from "../data/brands-cars";
import getModel from "../data/models-cars";
import { Car } from "../types/api-response";
import reader, { API_URL } from "./reader";

const getCars = async (page: number): Promise<Car[]> => {
  const data = (await reader(
    `${API_URL}garage/?_page=${page}&_limit=7`
  )) as string;
  const cars = JSON.parse(data);
  return cars;
};

const getCar = async (id: number): Promise<Car> => {
  const data = (await reader(`${API_URL}garage/${id}`)) as string;
  const car = JSON.parse(data);
  return car;
};

const addCar = async (
  name: string = `${getBrand()} ${getModel()}`,
  color: string = `#${Math.floor(Math.random() * 16777215).toString(16)}`
): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}garage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, color })
  });
  if (response.status === 201) return true;
  return false;
};

const deleteCar = async (id: number): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}garage/${id}/?${id}`, {
    method: "DELETE"
  });
  if (response.status !== 200) return false;
  return true;
};

const add100Cars = async (): Promise<boolean> => {
  const promises: Promise<boolean>[] = [];
  for (let i = 0; i < 100; i += 1) {
    promises.push(addCar());
  }
  return promises.reduce((acc, pr) =>
    acc.then(() => pr).catch(() => acc.then(() => pr))
  );
};

export { getCars, getCar, addCar, deleteCar, add100Cars };
