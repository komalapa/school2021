import { API_URL, carsPerPage } from "../constants";
import getBrand from "../data/brands-cars";
import getModel from "../data/models-cars";
import { Car } from "../types/api-response";

interface garageInfo {
  cars: Car[];
  count: number;
}
const getCars = async (page: number): Promise<garageInfo> => {
  const resp = await fetch(
    `${API_URL}garage/?_page=${page}&_limit=${carsPerPage}`
  );
  const cars = await resp.json();
  const count = resp.headers.get("X-Total-Count") as string;
  return { cars, count: +count };
};

const getCar = async (id: number): Promise<Car> => {
  const resp = await fetch(`${API_URL}garage/${id}`);
  const car = await resp.json();
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

const updateCar = async (
  id: number,
  name: string,
  color: string
): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}garage/${id}/?${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, color })
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

export { getCars, getCar, addCar, updateCar, deleteCar, add100Cars };
