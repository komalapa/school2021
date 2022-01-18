import { Car } from "../types/api-response";
import reader, { API_URL } from "./reader";

const getCars = async (page: number): Promise<Car[]> => {
  const data = (await reader(`${API_URL}garage/?_page=${page}`)) as string;
  const cars = JSON.parse(data);
  return cars;
};

const getCar = async (id: number): Promise<Car> => {
  const data = (await reader(`${API_URL}garage/${id}`)) as string;
  const car = JSON.parse(data);
  return car;
};

const addCar = async (name: string, color: string): Promise<boolean> => {
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
export { getCars, getCar, addCar, deleteCar };
