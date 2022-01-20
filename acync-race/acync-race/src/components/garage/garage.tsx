import React, { FC, useEffect, useState } from "react";
import { add100Cars, getCars } from "../../api/garage";
import { Car } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";
import Pagination from "../pagination/pagination";

import "./garage.css";

const Garage: FC = () => {
  const [isGarageChanged, setIsGarageChanged] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  if (isGarageChanged) {
    getCars(curPage).then((data) => {
      setCars(data.cars);
      setCarsCount(data.count);
    });
    setIsGarageChanged(false);
  }
  const carEls = cars.map((car) => (
    <CarView key={car.id} {...car} onCarInput={handleCarInput} />
  ));

  function handleCarInput(isGarageChanged: boolean): void {
    setIsGarageChanged(isGarageChanged);
  }

  function handleAdd100() {
    add100Cars().then(() => {
      setIsGarageChanged(true);
    });
  }

  function handleChangePage(direction: string) {
    if (direction === "next") setCurPage(curPage + 1);
    if (direction === "prev") setCurPage(curPage - 1);
    setIsGarageChanged(true);
  }

  return (
    <div className="garage">
      <EditCarForm onCarInput={handleCarInput} />
      <button onClick={handleAdd100}>Add 100 cars</button>
      {carEls}
      <Pagination
        page={curPage}
        onChange={handleChangePage}
        count={carsCount}
      />
    </div>
  );
};

export default Garage;
