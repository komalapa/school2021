import { API_URL, carsPerPage } from '../constants';
import getBrand from '../data/brands-cars';
import getRandomColor from '../data/colors';
import getModel from '../data/models-cars';
import { Car, GarageInfo, HTTPStatuses } from '../types/api';

const getCars = async (page?: number): Promise<GarageInfo> => {
  if (!page) {
    const resp = await fetch(`${API_URL}garage/?_page=1&_limit=${carsPerPage}`);
    const count = resp.headers.get('X-Total-Count') as string;
    if (+count > carsPerPage) {
      const resp2 = await fetch(`${API_URL}garage/?_page=1&_limit=${count}`);
      const cars: Car[] = await resp2.json();
      return { cars, count: +count };
    }
    const cars: Car[] = await resp.json();
    return { cars, count: +count };
  }
  const resp = await fetch(
    `${API_URL}garage/?_page=${page}&_limit=${carsPerPage}`,
  );
  const cars = await resp.json();
  const count = resp.headers.get('X-Total-Count') as string;
  return { cars, count: +count };
};

const getCar = async (id: number): Promise<Car> => {
  const resp = await fetch(`${API_URL}garage/${id}`);
  const car = await resp.json();
  return car;
};

const addCar = async (
  name: string = `${getBrand()} ${getModel()}`,
  color: string = `#${getRandomColor()}`,
): Promise<boolean> => {
  const response: Response = await fetch(`${API_URL}garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  if (response.status === HTTPStatuses.Created) return true;
  return false;
};

const deleteCar = async (id: number): Promise<boolean> => {
  const response: Response = await fetch(`${API_URL}garage/${id}/?${id}`, {
    method: 'DELETE',
  });
  if (response.status !== HTTPStatuses.OK) return false;
  return true;
};

const updateCar = async (
  id: number,
  name: string,
  color: string,
): Promise<boolean> => {
  const response: Response = await fetch(`${API_URL}garage/${id}/?${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  if (response.status !== HTTPStatuses.OK) return false;
  return true;
};

const addNCars = async (n:number): Promise<boolean> => {
  const promises: Promise<boolean>[] = [];
  for (let i = 0; i < n; i += 1) {
    promises.push(addCar());
  }
  return promises.reduce((acc, promise) => acc.then(() => promise)
    .catch(() => acc.then(() => promise)));
};

export {
  getCars, getCar, addCar, updateCar, deleteCar, addNCars,
};
