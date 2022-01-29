const API_URL = 'http://localhost:3000/';
const carsPerPage = 7;
const carsPerWinnerPage = 10;

const ADD_CARS_AMOUNT = 100;

enum SortOrders {
  asc = 'ASC',
  desc = 'DESC',
}

enum SortKeys {
  id = 'id',
  time = 'time',
  wins = 'wins',
}

export {
  API_URL, carsPerPage, carsPerWinnerPage, ADD_CARS_AMOUNT, SortOrders, SortKeys,
};
