import React, { FC, useState } from "react";
import { add100Cars, getCars } from "../../api/garage";
import { addWinner } from "../../api/winners";
import { Car, Winner } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";
import Pagination from "../pagination/pagination";
import WinnerAlert from "../winner/winner";

import "./garage.css";
interface GarageProps {
  hidden: boolean;
}
let haveWinner = false;
const Garage: FC<GarageProps> = ({ hidden }) => {
  const [isGarageChanged, setIsGarageChanged] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);
  const [isRaceStarted, setIsRaceStarted] = useState<boolean>(false);

  const [winner, setWinner] = useState<Winner | null>(null);

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
    if (isRaceStarted) handleStopRace();
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

  function handleFinished(car: Car, time: number) {
    if (!haveWinner && isRaceStarted) {
      haveWinner = true;
      setWinner({ car, time: time / 1000 });
      addWinner(car.id, time / 1000);
    }
  }

  return (
    <div className={`garage ${!hidden && "hidden"}`}>
      {isRaceStarted && winner && (
        <WinnerAlert car={winner.car} time={winner.time} />
      )}
      <EditCarForm onCarInput={handleCarInput} />
      <div className="garage-controls">
        <button onClick={handleAdd100}>Add 100 cars</button>
        {isRaceStarted ? (
          <button onClick={handleStopRace}>Stop Race</button>
        ) : (
          <button onClick={handleStartRace}>Start Race</button>
        )}
      </div>

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
