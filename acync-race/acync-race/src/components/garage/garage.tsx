import React, { FC, useEffect, useState } from "react";
import { add100Cars, getCars } from "../../api/garage";
import { Car } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";
import Pagination from "../pagination/pagination";

import "./garage.css";

let haveWinner = false;
const Garage: FC = () => {
  const [isGarageChanged, setIsGarageChanged] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);
  const [isRaceStarted, setIsRaceStarted] = useState<boolean>(false);
  const [winner, setWinner] = useState<Car | null>(null);

  if (isGarageChanged) {
    getCars(curPage).then((data) => {
      setCars(data.cars);
      setCarsCount(data.count);
    });
    setIsGarageChanged(false);
  }
  const carEls = cars.map((car) => (
    <CarView
      key={car.id}
      {...car}
      onCarInput={handleCarInput}
      isRaceStarted={isRaceStarted}
      onFinish={handleFinished}
    />
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

  function handleStartRace() {
    setIsRaceStarted(true);
    setWinner(null);
    haveWinner = false;
  }

  function handleStopRace() {
    setIsRaceStarted(false);
    setWinner(null);
    haveWinner = false;
  }

  function handleFinished(car: Car) {
    if (!haveWinner && isRaceStarted) {
      haveWinner = true;
      setWinner(car);
    }
    // debugger;
  }
  // console.log("win", winners);
  return (
    <div className="garage">
      <span>{winner?.name}</span>
      <EditCarForm onCarInput={handleCarInput} />
      <button onClick={handleAdd100}>Add 100 cars</button>
      <button onClick={handleStartRace}>Start Race</button>
      <button onClick={handleStopRace}>Stop Race</button>
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
